using Microsoft.EntityFrameworkCore;
using PlayVisionAPI.Data;
using PlayVisionAPI.DTOs;

namespace PlayVisionAPI.Endpoints
{
    public static class MatchEnpoint
    {
        public static TResult Let<T, TResult>(this T value, Func<T, TResult> func)
        => func(value);
        public static void MapMatchEndpoints( this WebApplication app)
        {
            var now = DateTime.UtcNow;


            
        }
    }
}
