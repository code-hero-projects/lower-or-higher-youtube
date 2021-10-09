ARG dotnetversion=5.0

FROM mcr.microsoft.com/dotnet/aspnet:${dotnetversion}-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:${dotnetversion}-buster-slim AS build
WORKDIR /src

COPY . .

WORKDIR /src
RUN dotnet restore CodeHero.LowerOrHigherYoutube.sln

RUN dotnet build CodeHero.LowerOrHigherYoutube.sln -c Release -o /app/build

FROM build AS publish
RUN dotnet publish CodeHero.LowerOrHigherYoutube.sln -c Release -o /app/publish

FROM base AS final
ENV ASPNETCORE_URLS=http://+:80

WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "CodeHero.LowerOrHigherYoutube.API.dll"]