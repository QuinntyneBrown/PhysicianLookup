using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features.GeoLocation
{
    public interface IGoogleMapsService
    {
        Task<GoogleEncodeResponse> GetCoordinates(string address);
        Task<GoogleEncodeResponse> GetAddress(double latitude, double longitude);
    }
}
