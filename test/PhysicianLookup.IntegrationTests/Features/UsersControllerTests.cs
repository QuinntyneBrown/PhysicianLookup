using Newtonsoft.Json;
using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features;
using PhysicianLookup.Testing;
using PhysicianLookup.Testing.Builders;
using System;
using System.Linq;
using System.Net.Http;
using System.Text;
using Xunit;
using static PhysicianLookup.IntegrationTests.Features.UsersControllerTests.Endpoints;

namespace PhysicianLookup.IntegrationTests.Features
{
    public class UsersControllerTests : IClassFixture<ApiTestFixture>
    {
        private readonly ApiTestFixture _fixture;
        public UsersControllerTests(ApiTestFixture fixture)
        {
            _fixture = fixture;
        }


        [Fact]
        public async System.Threading.Tasks.Task Should_CreateUser()
        {
            var context = _fixture.Context;

            var user = UserDtoBuilder.WithDefaults();

            StringContent stringContent = new StringContent(JsonConvert.SerializeObject(new { user }), Encoding.UTF8, "application/json");

            using var client = _fixture.CreateAuthenticatedClient();

            var httpResponseMessage = await client.PostAsync(Endpoints.Post.CreateUser, stringContent);

            var response = JsonConvert.DeserializeObject<CreateUser.Response>(await httpResponseMessage.Content.ReadAsStringAsync());

            var sut = context.FindAsync<User>(response.User.UserId);

            Assert.NotEqual(default, response.User.UserId);
        }

        [Fact]
        public async System.Threading.Tasks.Task Should_RemoveUser()
        {
            var user = UserBuilder.WithDefaults();

            var context = _fixture.Context;

            var client = _fixture.CreateAuthenticatedClient();

            context.Users.Add(user);

            await context.SaveChangesAsync(default);

            var httpResponseMessage = await client.DeleteAsync(Delete.By(user.UserId));

            httpResponseMessage.EnsureSuccessStatusCode();

            var removedUser = await context.FindAsync<User>(user.UserId);

            Assert.NotEqual(default, removedUser);
        }

        [Fact]
        public async System.Threading.Tasks.Task Should_UpdateUser()
        {
            var user = UserBuilder.WithDefaults();

            var context = _fixture.Context;

            context.Users.Add(user);

            await context.SaveChangesAsync(default);

            StringContent stringContent = new StringContent(JsonConvert.SerializeObject(new { user = user.ToDto() }), Encoding.UTF8, "application/json");

            var httpResponseMessage = await _fixture.CreateAuthenticatedClient().PutAsync(Put.Update, stringContent);

            httpResponseMessage.EnsureSuccessStatusCode();

            var sut = await context.FindAsync<User>(user.UserId);

        }

        [Fact]
        public async System.Threading.Tasks.Task Should_GetUsers()
        {
            var user = UserBuilder.WithDefaults();

            var context = _fixture.Context;

            context.Users.Add(user);

            await context.SaveChangesAsync(default);

            var httpResponseMessage = await _fixture.CreateAuthenticatedClient().GetAsync(Get.Users);

            httpResponseMessage.EnsureSuccessStatusCode();

            var response = JsonConvert.DeserializeObject<GetUsers.Response>(await httpResponseMessage.Content.ReadAsStringAsync());

            Assert.True(response.Users.Any());
        }

        [Fact]
        public async System.Threading.Tasks.Task Should_GetUserById()
        {
            var user = UserBuilder.WithDefaults();

            var context = _fixture.Context;

            context.Users.Add(user);

            await context.SaveChangesAsync(default);

            var httpResponseMessage = await _fixture.CreateAuthenticatedClient().GetAsync(Get.By(user.UserId));

            httpResponseMessage.EnsureSuccessStatusCode();

            var response = JsonConvert.DeserializeObject<GetUserById.Response>(await httpResponseMessage.Content.ReadAsStringAsync());

            Assert.NotNull(response);

        }

        internal static class Endpoints
        {
            public static class Post
            {
                public static string CreateUser = "api/users";
            }

            public static class Put
            {
                public static string Update = "api/users";
            }

            public static class Delete
            {
                public static string By(Guid userId)
                {
                    return $"api/users/{userId}";
                }
            }

            public static class Get
            {
                public static string Users = "api/users";
                public static string By(Guid userId)
                {
                    return $"api/users/{userId}";
                }
            }
        }
    }
}
