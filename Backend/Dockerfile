FROM mcr.microsoft.com/dotnet/sdk:6.0.402-jammy-amd64

WORKDIR /usr/src/api

COPY Controllers ./Controllers
COPY Core ./Core
COPY Plugins ./Plugins
COPY Utility ./Utility

COPY Backend.csproj .
COPY Program.cs .
COPY project.json .
COPY Startup.cs .

# RUN dotnet publish -c Release -o /app --no-restore

EXPOSE 8080

CMD ASPNETCORE_URLS=http://0.0.0.0:8080  dotnet  run