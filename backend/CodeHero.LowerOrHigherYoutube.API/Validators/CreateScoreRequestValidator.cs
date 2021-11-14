using CodeHero.LowerOrHigherYouTube.API.Requests;
using FluentValidation;

namespace CodeHero.LowerOrHigherYouTube.API.Validators
{
    public class CreateScoreRequestValidator : AbstractValidator<CreateScoreRequest>
    {
        private const int PointsMinimumValue = 0;
        private const int PlayerNameMinimumSize = 1;
        private const int PlayerNameMaximumSize = 15;

        public CreateScoreRequestValidator()
        {
            RuleFor(x => x.Points)
                .NotEmpty()
                .GreaterThan(PointsMinimumValue);

            RuleFor(x => x.PlayerName)
                .NotEmpty()
                .MinimumLength(PlayerNameMinimumSize)
                .MaximumLength(PlayerNameMaximumSize);

            RuleFor(x => x.CountryId)
                .NotEmpty();
        }
    }
}
