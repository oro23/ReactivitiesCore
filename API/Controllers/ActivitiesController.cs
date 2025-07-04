using System;
using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers;

public class ActivitiesController() : BaseApiController
{
    // private readonly ApplicationDbContext context;
    // private readonly IMediator mediator;

    // public ActivitiesController(ApplicationDbContext context, IMediator mediator)
    // {
    //     this.context = context;
    //     this.mediator = mediator;
    // }

    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetAll()
    {
        //return await context.Activities.ToListAsync();
        //return await mediator.Send(new GetActivityList.Query());
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetById(string id)
    {
        // var activity = await context.Activities.FindAsync(id);
        // if (activity == null) return NotFound();
        // return activity;

        //return await mediator.Send(new GetActivityDetails.Query { Id = id });
        return await Mediator.Send(new GetActivityDetails.Query { Id = id });
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(Activity activity)
    {
        return await Mediator.Send(new CreateActivity.Command { Activity = activity });
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(Activity activity)
    {
        await Mediator.Send(new EditActivity.Command { Activity = activity });

        return NoContent();
    }
}
