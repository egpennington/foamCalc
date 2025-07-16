export function getFoamRate(diameter) {
  if (diameter < 150) return 0.2
  if (diameter <= 200) return 0.23
  if (diameter <= 250) return 0.25
  if (diameter <= 300) return 0.28
  return 0.31
}

export function calculateTankVolumes(tank) {
  const PI = Math.PI
  const radius = tank.diameter / 2
  const baseArea = PI * Math.pow(radius, 2)

  const volumePerInch = baseArea * (1 / 12)
  const volumePerFoot = baseArea

  return {
    volumePerInch: Math.round(volumePerInch * 7.48052),
    volumePerFoot: Math.round(volumePerFoot * 7.48052)
  }
}

export function calculateFoam(tank) {
  const diameterSq = Math.round(tank.diameter * tank.diameter)
  const sqFoot = Math.round(diameterSq * 0.8)

  const foamRate = getFoamRate(tank.diameter)
  const criticalRate = Math.round(sqFoot * foamRate)

  const foam1GPM = Math.round(criticalRate * 0.01)
  const foam3GPM = Math.round(criticalRate * 0.03)

  const totalFoam1 = Math.round(foam1GPM * 65)
  const totalFoam3 = Math.round(foam3GPM * 65)

  const volumes = calculateTankVolumes(tank)

  return {
    sqFoot,
    criticalRate,
    foam1GPM,
    foam3GPM,
    totalFoam1,
    totalFoam3,
    ...volumes
  }
}