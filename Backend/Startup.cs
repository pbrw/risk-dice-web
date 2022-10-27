using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
// using Supermarket.API.Controllers.Config;
// using Supermarket.API.Controllers.Config;
// using Supermarket.API.Domain.Repositories;
// using Supermarket.API.Domain.Services;
// using Supermarket.API.Extensions;
// using Supermarket.API.Persistence.Contexts;
// using Supermarket.API.Persistence.Repositories;
// using Supermarket.API.Services;
using System.Linq;
using Microsoft.AspNetCore.Mvc;


// namespace Supermarket.API.Controllers.Config
// {
//     public static class InvalidModelStateResponseFactory
//     {
//         public static IActionResult ProduceErrorResponse(ActionContext context)
//         {
//             // var errors = context.ModelState.GetErrorMessages();
//             var response = new ErrorResource();
            
//             return new BadRequestObjectResult(response);
//         }
//     }
// }

namespace Supermarket.API
{
    public class Startup
    {
        private readonly IConfiguration Configuration;

        public Startup(IConfiguration configuration) => Configuration = configuration;
        
        public void ConfigureServices(IServiceCollection services)
        {
            // MvcOptions.EnableEndpointRouting = false;
            var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder =>
                    {
                        builder
                        .WithOrigins() 
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                    });
            });
            services.AddMvc(options => options.EnableEndpointRouting = false);

            services.AddMemoryCache();

            // services.AddCustomSwagger();

            services.AddControllers();

            // services.AddDbContext<AppDbContext>(options =>
            // {
            //     options.UseInMemoryDatabase(Configuration.GetConnectionString("memory"));
            // });

            // services.AddScoped<ICategoryRepository, CategoryRepository>();
            // services.AddScoped<IProductRepository, ProductRepository>();
            // services.AddScoped<IUnitOfWork, UnitOfWork>();

            // services.AddScoped<ICategoryService, CategoryService>();
            // services.AddScoped<IProductService, ProductService>();

            services.AddAutoMapper(typeof(Startup));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // app.UseCustomSwagger();
            
            app.UseCors(MyAllowSpecificOrigins);
            app.Use(async (context, next) =>
            {
                // var origin = HttpContext.Current.Request.Headers.GetValues("Origin").FirstOrDefault("lel");
                context.Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
                context.Response.Headers.Add("Access-Control-Allow-Credentials", "true");
                await next();
            });
            app.UseMvc();
            app.UseRouting();
            
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}