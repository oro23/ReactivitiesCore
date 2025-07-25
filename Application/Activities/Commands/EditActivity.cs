using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistance;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activity Activity { get; set; }
    }

    public class Handler(ApplicationDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            // var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken);
            // if (activity == null) throw new Exception("Activity not found!");

            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken) ?? throw new Exception("Activity not found!");

            //activity.Title = request.Activity.Title;

            mapper.Map(request.Activity, activity);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
