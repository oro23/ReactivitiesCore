using System;
using Domain;

namespace Persistance;

public class DbInitializer
{
    public static async Task SeedData(ApplicationDbContext context)
    {
        if (context.Activities.Any()) return;
        var activities = new List<Activity>
        {
            new (){
                Title="National Data",
                Description="Today is national day",
                Date=DateTime.Now.AddMonths(-2),
                Category="NationalDay",
                City="DBX",
                Venue="UAE",
                Latitute=48.8645855,
                Longitude=56.8645855,
            },
            new() {
                Title = "City Festival",
                Description = "Annual celebration of the city's founding",
                Date = DateTime.Now.AddMonths(-1),
                Category = "Festival",
                City = "NYC",
                Venue = "Central Park",
                Latitute = 40.785091,
                Longitude = -73.968285
            },
            new() {
                Title = "Tech Expo",
                Description = "Technology exhibition showcasing innovations",
                Date = DateTime.Now.AddDays(-10),
                Category = "Exhibition",
                City = "SFO",
                Venue = "Moscone Center",
                Latitute = 37.774929,
                Longitude = -122.419416
            },
            new() {
                Title = "Music Gala",
                Description = "An evening of classical music performances",
                Date = DateTime.Now.AddDays(15),
                Category = "Concert",
                City = "LDN",
                Venue = "Royal Albert Hall",
                Latitute = 51.500729,
                Longitude = -0.124625
            },
            new() {
                Title = "Startup Meetup",
                Description = "Networking event for startups and investors",
                Date = DateTime.Now.AddMonths(1),
                Category = "Business",
                City = "BLR",
                Venue = "TechHub",
                Latitute = 12.971599,
                Longitude = 77.594566
            }
        };

        context.Activities.AddRange(activities);
        await context.SaveChangesAsync();
    }
}
