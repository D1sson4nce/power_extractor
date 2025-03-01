StartupEvents.registry('palladium:abilities', event => {
    event.create('power_extractor:inject')
        .icon(palladium.createItemIcon('power_extractor:power_injector'))
        .firstTick((entity, entry, holder, enabled) => {
            if(!enabled) return

            const power = entity.mainHandItem.getNbt()?.power
            if(power) palladium.superpowers.addSuperpower(entity, power)

            entity.mainHandItem = Item.of('power_extractor:power_extractor', 1)
        })
});