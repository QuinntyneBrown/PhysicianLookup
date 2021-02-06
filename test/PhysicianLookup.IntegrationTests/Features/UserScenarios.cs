using Newtonsoft.Json;
using PhysicianLookup.Domain.Features;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace IntegrationTests.Features
{
    public class UserScenarios : ScenarioBase
    {
        [Fact]
        public async Task ShouldReturnToken()
        {
            var content = new { Password = "admin", Username = "quinn" };

            var stringContent = new StringContent(JsonConvert.SerializeObject(content), Encoding.UTF8, "application/json");

            var client = await CreateServer();

            var httpResponse = await client.PostAsync("/api/users/token", stringContent);

            var responseString = await httpResponse.Content.ReadAsStringAsync();

            var response = JsonConvert.DeserializeObject<Authenticate.Response>(responseString);

            Assert.NotNull(response.AccessToken);
        }

        [Fact]
        public async Task ShouldReutrnResponseWithValidationErrors()
        {
            var content = new { Password = "", Username = "quinn" };

            var stringContent = new StringContent(JsonConvert.SerializeObject(content), Encoding.UTF8, "application/json");

            var client = await CreateServer();

            var httpResponse = await client.PostAsync("/api/users/token", stringContent);

            var responseString = await httpResponse.Content.ReadAsStringAsync();

            var response = JsonConvert.DeserializeObject<Authenticate.Response>(responseString);

            Assert.Single(response.ValidationErrors);
        }
    }
}