using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    private readonly ApplicationDbContext context;

    public ActivitiesController(ApplicationDbContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetAll()
    {
        return await context.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetById(string id)
    {
        var activity = await context.Activities.FindAsync(id);
        if (activity == null) return NotFound();
        return activity;
    }
}
