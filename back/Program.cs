using Microsoft.EntityFrameworkCore;
using PlayVisionAPI.Data;
using PlayVisionAPI.Endpoints;

//Iniciamos la aplicacion y aplicamos las configuraciones necesarias
var builder = WebApplication.CreateBuilder(args);

//Configuramos los servicios de la aplicacion y la conexion a la base de datos en PostgreSQL
//Tambien añadimos un paquete para convertir los nombre de los modelos a snake_case que se usan en PostgreSQL
builder.Services
    .AddDbContext<AppDbContext2>(opt =>
    opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
    .UseSnakeCaseNamingConvention());

//Añadimos una politica de CORS para permitir que se puedan hacer peticiones desde cualquier origen
builder.Services.AddCors(o => o.AddPolicy("AllowAll",
    p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

//Construimos la aplicacion e indicamos que use la politica de CORS que hemos creado
var app = builder.Build();
app.UseCors("AllowAll");

//Asociamos a la app los distintos endpoints que hemos creado
app.MapMatchEndpoints();
app.MapTeamEndpoints();
app.MapCompetitionEndpoints();
app.MapPlayerEndpoints();
app.MapLeagueEndpoints();

app.Run();

