StartupEvents.registry('palladium:abilities', event => {
    event.create('power_extractor:extract')
        .icon(palladium.createItemIcon('power_extractor:power_extractor'))
        .firstTick((entity, entry, holder, enabled) => {
            if(!enabled) return
            
            const powers = entity.data.powers.getPowers().filter(p => palladium.superpowers.hasSuperpower(entity, p))
            if(powers.length < 1) return
            console.log(powers.join(", "));
            
            const randomPower = powers[Math.floor(Math.random() * powers.length)]

            palladium.superpowers.removeSuperpower(entity, randomPower)
            console.log(randomPower.toString());
            
            entity.mainHandItem = Item.of('power_extractor:power_injector', 1, { power: randomPower.toString() })
        })
});