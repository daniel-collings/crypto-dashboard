export const selectAllCryptos = (state) => {
  const data = state.api.data
  /* data = data.map(o => {
        if (o.type_is_crypto === 1 && o.volume_1mth_usd > 1000000000) return { ...o, name: o.name, id: o.asset_id }
        return undefined
    }).filter(obj => obj !== undefined)

    data = data.filter(o => o.name !== undefined) */

  const selectedCryptos = state.filters.cryptos

  const selectedInArrayFirst = data.filter(a => selectedCryptos.includes(a.type))

  const mergedArrayWithSelectedAtStartOfArray = [...selectedInArrayFirst, ...data]

  return mergedArrayWithSelectedAtStartOfArray.filter((v, i, a) => a.findIndex(t => (t.type === v.type)) === i)
}
