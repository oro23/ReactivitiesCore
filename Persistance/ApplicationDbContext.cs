using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance;

public class ApplicationDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Activity> Activities { get; set; }
}
