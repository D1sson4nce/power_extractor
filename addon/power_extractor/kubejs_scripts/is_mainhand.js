StartupEvents.registry('palladium:condition_serializer', (event) => {
    event.create('power_extractor:is_mainhand')
        .addProperty("hand", "string", "right", "Is the main hand the right or left hand? Valid values are \"left\" or \"right\"")
        .test((entity, props) => {
            const hand = props.get("hand")
            return entity.getMainArm().toString().toLowerCase() === hand
        })
});