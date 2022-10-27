using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Supermarket.API
{

// #pragma warning disable CS1591
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            Console.WriteLine("Sieeeema!");
            var builder = CreateHostBuilder(args);
            // builder.Services.AddCors(options =>
            //     {
            //         options.AddPolicy(name: MyAllowSpecificOrigins,
            //                         policy  =>
            //                         {
            //                             policy.WithOrigins("http://localhost:3000",
            //                                                 "http://www.contoso.com");
            //                         });
            //     });
            var host = builder.Build();
            
            // await host.RunAsync();
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) {
            return Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
        }
    }
// #pragma warning restore CS1591
}