PalladiumEvents.registerAnimations(event => {
    event.register("extract_right", 10, builder => extract('extract', "right", builder))
    event.register("extract_left", 10, builder => extract('extract', "left", builder))
    event.register("inject_right", 10, builder => extract('inject', "right", builder))
    event.register("inject_left", 10, builder => extract('inject', "left", builder))
}) 

function extract(type, arm, builder) {
    const prograss = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), `power_extractor:${type}`, `${type}_${arm}`, builder.getPartialTicks());
    if(builder.isFirstPerson()) {
        return
    }

    builder.get(`${arm}_arm`)
        .setZ(-5)
        .setYRotDegrees((arm == "right" ? -1 : 1) * 150)
        .setZRotDegrees((arm == "right" ? -1 : 1) * 60)
        .animate("InOutCubic", prograss)
}