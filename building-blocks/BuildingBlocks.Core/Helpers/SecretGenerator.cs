using System.Security.Cryptography;

namespace BuildingBlocks.Core.Helpers
{
    public static class SecretGenerator
    {
        public static string Generate()
        {
            var tripleDESCryptoServiceProvider = new TripleDESCryptoServiceProvider();
            tripleDESCryptoServiceProvider.GenerateKey();
            return System.Convert.ToBase64String(tripleDESCryptoServiceProvider.Key);
        }
    }

}
