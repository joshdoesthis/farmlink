const try_catch = async <T, E = unknown>(
  fn: () => Promise<T> | T
): Promise<[T, null] | [null, E]> => {
  try {
    const res = await fn()
    return [res, null]
  } catch (err) {
    return [null, err as E]
  }
}

export default try_catch
