# Esta fase se usa cuando se ejecuta desde VS en modo rápido (valor predeterminado para la configuración de depuración)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
#USER $APP_UID
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000


# Esta fase se usa para compilar el proyecto y crear los archivos necesarios para la ejecución
# Se usa la imagen con el SDK de .NET 8.0 en vez de la imagen de ASP.NET Core
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["PlayVisionAPI.csproj", "./"]
RUN dotnet restore "PlayVisionAPI.csproj"
COPY . .
#WORKDIR "/src/PlayVisionAPI"
RUN dotnet publish "./PlayVisionAPI.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Esta fase se usa para publicar el proyecto de servicio que se copiará en la fase final.
#FROM build AS publish
#ARG BUILD_CONFIGURATION=Release
#RUN dotnet publish "./PlayVisionAPI.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Esta fase se usa para crear la imagen final que se ejecutará en el contenedor
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "PlayVisionAPI.dll"]