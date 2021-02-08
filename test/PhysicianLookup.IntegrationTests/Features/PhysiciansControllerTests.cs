/*using Newtonsoft.Json;
using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features;
using PhysicianLookup.Domain.Features.Physicians;
using PhysicianLookup.Testing;
using PhysicianLookup.Testing.Builders.Core.Models;
using PhysicianLookup.Testing.Builders.Domain.Dtos;
using System;
using System.Linq;
using System.Net.Http;
using System.Text;
using Xunit;
using static .Features.PhysiciansControllerTests.Endpoints;

namespace .Features
{
    public class PhysiciansControllerTests : IClassFixture<ApiTestFixture>
    {
        private readonly ApiTestFixture _fixture;
        public PhysiciansControllerTests(ApiTestFixture fixture)
        {
            _fixture = fixture;
        }


        [Fact]
        public async System.Threading.Tasks.Task Should_CreatePhysician()
        {
            var context = _fixture.Context;

            var physician = PhysicianDtoBuilder.WithDefaults();

            StringContent stringContent = new StringContent(JsonConvert.SerializeObject(new { physician }), Encoding.UTF8, "application/json");

            using var client = _fixture.CreateAuthenticatedClient();

            var httpResponseMessage = await client.PostAsync(Endpoints.Post.CreatePhysician, stringContent);

            var response = JsonConvert.DeserializeObject<CreatePhysician.Response>(await httpResponseMessage.Content.ReadAsStringAsync());

            var sut = context.FindAsync<Physician>(response.Physician.PhysicianId);

            Assert.NotEqual(default, response.Physician.PhysicianId);
        }

        [Fact]
        public async System.Threading.Tasks.Task Should_RemovePhysician()
        {
            var physician = PhysicianBuilder.WithDefaults();

            var context = _fixture.Context;

            var client = _fixture.CreateAuthenticatedClient();

            context.Store(physician);

            await context.SaveChangesAsync(default);

            var httpResponseMessage = await client.DeleteAsync(Delete.By(physician.PhysicianId));

            httpResponseMessage.EnsureSuccessStatusCode();

            var removedPhysician = await context.FindAsync<Physician>(physician.PhysicianId);

            Assert.NotEqual(default, removedPhysician.Deleted);
        }

        [Fact]
        public async System.Threading.Tasks.Task Should_UpdatePhysician()
        {
            var physician = PhysicianBuilder.WithDefaults();

            var context = _fixture.Context;

            context.Store(physician);

            await context.SaveChangesAsync(default);

            StringContent stringContent = new StringContent(JsonConvert.SerializeObject(new { physician = physician.ToDto() }), Encoding.UTF8, "application/json");

            var httpResponseMessage = await _fixture.CreateAuthenticatedClient().PutAsync(Put.Update, stringContent);

            httpResponseMessage.EnsureSuccessStatusCode();

            var sut = await context.FindAsync<Physician>(physician.PhysicianId);

        }

        [Fact]
        public async System.Threading.Tasks.Task Should_GetPhysicians()
        {
            var physician = PhysicianBuilder.WithDefaults();

            var context = _fixture.Context;

            context.Store(physician);

            await context.SaveChangesAsync(default);

            var httpResponseMessage = await _fixture.CreateAuthenticatedClient().GetAsync(Get.Physicians);

            httpResponseMessage.EnsureSuccessStatusCode();

            var response = JsonConvert.DeserializeObject<GetPhysicians.Response>(await httpResponseMessage.Content.ReadAsStringAsync());

            Assert.True(response.Physicians.Any());
        }

        [Fact]
        public async System.Threading.Tasks.Task Should_GetPhysicianById()
        {
            var physician = PhysicianBuilder.WithDefaults();

            var context = _fixture.Context;

            context.Store(physician);

            await context.SaveChangesAsync(default);

            var httpResponseMessage = await _fixture.CreateAuthenticatedClient().GetAsync(Get.By(physician.PhysicianId));

            httpResponseMessage.EnsureSuccessStatusCode();

            var response = JsonConvert.DeserializeObject<GetPhysicianById.Response>(await httpResponseMessage.Content.ReadAsStringAsync());

            Assert.NotNull(response);

        }

        internal static class Endpoints
        {
            public static class Post
            {
                public static string CreatePhysician = "api/physicians";
            }

            public static class Put
            {
                public static string Update = "api/physicians";
            }

            public static class Delete
            {
                public static string By(Guid physicianId)
                {
                    return $"api/physicians/{physicianId}";
                }
            }

            public static class Get
            {
                public static string Physicians = "api/physicians";
                public static string By(Guid physicianId)
                {
                    return $"api/physicians/{physicianId}";
                }
            }
        }
    }
}
*/