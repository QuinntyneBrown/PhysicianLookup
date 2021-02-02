using FluentValidation;

namespace PhysicianLookup.Domain.Features
{
    public class PhysicianDtoValidator : AbstractValidator<PhysicianDto>
    {
        public PhysicianDtoValidator()
        {
            RuleFor(x => x.Address)
                .SetValidator(new AddressDtoValidator());
        }
    }
}
