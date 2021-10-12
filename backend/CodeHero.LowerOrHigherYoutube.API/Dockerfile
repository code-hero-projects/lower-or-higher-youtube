#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["CodeHero.LowerOrHigherYoutube.API/CodeHero.LowerOrHigherYoutube.API.csproj", "CodeHero.LowerOrHigherYoutube.API/"]
COPY ["CodeHero.LowerOrHigherYoutube.Database/CodeHero.LowerOrHigherYoutube.Database.csproj", "CodeHero.LowerOrHigherYoutube.Database/"]
COPY ["CodeHero.LowerOrHigherYoutube.Core/CodeHero.LowerOrHigherYoutube.Core.csproj", "CodeHero.LowerOrHigherYoutube.Core/"]
COPY ["CodeHero.LowerOrHigherYoutube.Migrations.PostgreSql/CodeHero.LowerOrHigherYoutube.Migrations.PostgreSql.csproj", "CodeHero.LowerOrHigherYoutube.Migrations.PostgreSql/"]
COPY ["CodeHero.LowerOrHigherYoutube.Application/CodeHero.LowerOrHigherYoutube.Application.csproj", "CodeHero.LowerOrHigherYoutube.Application/"]
RUN dotnet restore "CodeHero.LowerOrHigherYoutube.API/CodeHero.LowerOrHigherYoutube.API.csproj"
COPY . .
WORKDIR "/src/CodeHero.LowerOrHigherYoutube.API"
RUN dotnet build "CodeHero.LowerOrHigherYoutube.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CodeHero.LowerOrHigherYoutube.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CodeHero.LowerOrHigherYoutube.API.dll"]
