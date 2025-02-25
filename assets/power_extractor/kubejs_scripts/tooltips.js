ItemEvents.tooltip(event => {
    event.addAdvanced("power_extractor:power_injector", (item, advanced, text) => {
        if(item.nbt && advanced) {
            text.add(1, Text.of(`Superpower id: ${item.nbt.power}`).gray())
            return
        }

        if(!item.nbt) text.add(1, Text.of("Empty").white())
    })
})