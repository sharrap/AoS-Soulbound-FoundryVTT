if (args.testData.options.backstab && args.succeeded)
{
    args.result.damage.total *= 2;
    args.result.other.push({label : this.effect.name, description : "Damage Doubled, Ignores AP"})
}