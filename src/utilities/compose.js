const compose = (...funcs) => (component) => {
    return funcs.reduceRight((prevValue, func) => {
        return func(prevValue)
    }, component)
}

export default compose