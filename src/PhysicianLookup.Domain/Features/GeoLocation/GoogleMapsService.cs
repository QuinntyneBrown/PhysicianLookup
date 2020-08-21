using BuildingBlocks.Core.Extensions;
using System.Net.Http;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features.GeoLocation
{
    public class GoogleMapsService: IGoogleMapsService
    {
        private readonly HttpClient _client;
        public GoogleMapsService(HttpClient client)
        {
            _client = client;
        }

        public async Task<GoogleEncodeResponse> GetAddress(double latitude, double longitude)
        {
            return await _client.GetAsync<GoogleEncodeResponse>($"http://maps.googleapis.com/maps/api/geocode/json?latlng={latitude},{longitude}&sensor=false");
        }

        public async Task<GoogleEncodeResponse> GetCoordinates(string address)
        {
            return await _client.GetAsync<GoogleEncodeResponse>($"http://maps.googleapis.com/maps/api/geocode/json?address={address}&sensor=false");
        }
    }
}
