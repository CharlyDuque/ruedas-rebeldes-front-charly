export const useGetBuildings = () => {
  const buildings = [
    { id: "12345678-1234-5678-1234-567812345678", description: "Puentes de la gente", latitud: "25.438296", longitud: "-100.915142", status: 3, contractor: "contractor-1", amount: "1000", statusText: "status-text", image: "PMS-OP-044-22_1.png" },
    { id: "12345678-1234-5678-1234-567812345679", description: "Puentes de la gente 2", latitud: "25.434653", longitud: "-100.928746", status: 2, contractor: "contractor-2", amount: "2000", statusText: "status-text", image: "PMS-OP-FISM-052-22_1.png" },
    { id: "12345678-1234-5678-1234-567812345680", description: "Puentes de la gente 3", latitud: "25.432715", longitud: "-100.939389", status: 1, contractor: "contractor-3", amount: "3000", statusText: "status-text", image: "PMS-OP-FISM-054-22_1.png" },
  ]

  return buildings
}
