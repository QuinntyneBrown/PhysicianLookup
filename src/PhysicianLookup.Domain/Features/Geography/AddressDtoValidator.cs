using FluentValidation;

namespace PhysicianLookup.Domain.Features
{
    public class AddressDtoValidator : AbstractValidator<AddressDto>
    {
        public AddressDtoValidator()
        {
            RuleFor(x => x.Street).NotNull();
            RuleFor(x => x.City).NotNull();
            RuleFor(x => x.Province).NotNull();
            RuleFor(x => x.PostalCode).NotNull();
        }
    }
}
