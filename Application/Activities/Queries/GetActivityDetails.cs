using System;
using Domain;
using MediatR;
using Persistance;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
    public class Query : IRequest<Activity>
    {
        public required string Id { get; set; }
    }

    public class Handler(ApplicationDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            //var activity = await context.Activities.FindAsync(request.Id, cancellationToken);
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken);
            if (activity == null) throw new Exception("Activity not found!");
            return activity;
        }
    }
}
