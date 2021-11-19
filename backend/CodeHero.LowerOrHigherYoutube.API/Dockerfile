#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["CodeHero.LowerOrHigherYouTube.API/CodeHero.LowerOrHigherYouTube.API.csproj", "CodeHero.LowerOrHigherYouTube.API/"]
COPY ["CodeHero.LowerOrHigherYouTube.VideoFetcher/CodeHero.LowerOrHigherYouTube.VideoFetcher.csproj", "CodeHero.LowerOrHigherYouTube.VideoFetcher/"]
COPY ["CodeHero.LowerOrHigherYouTube.Core/CodeHero.LowerOrHigherYouTube.Core.csproj", "CodeHero.LowerOrHigherYouTube.Core/"]
COPY ["CodeHero.LowerOrHigherYouTube.Database/CodeHero.LowerOrHigherYouTube.Database.csproj", "CodeHero.LowerOrHigherYouTube.Database/"]
COPY ["CodeHero.LowerOrHigherYouTube.Migrations.PostgreSql/CodeHero.LowerOrHigherYouTube.Migrations.PostgreSql.csproj", "CodeHero.LowerOrHigherYouTube.Migrations.PostgreSql/"]
COPY ["CodeHero.LowerOrHigherYouTube.Application/CodeHero.LowerOrHigherYouTube.Application.csproj", "CodeHero.LowerOrHigherYouTube.Application/"]
RUN dotnet restore "CodeHero.LowerOrHigherYouTube.API/CodeHero.LowerOrHigherYouTube.API.csproj"
COPY . .

WORKDIR "/src/CodeHero.LowerOrHigherYouTube.API"
RUN dotnet build "CodeHero.LowerOrHigherYouTube.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CodeHero.LowerOrHigherYouTube.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CodeHero.LowerOrHigherYouTube.API.dll"]