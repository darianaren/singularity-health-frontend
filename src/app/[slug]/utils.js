export const fetchUsers = async (setUsersData) => {
  try {
    /* Es recomendable guardar información sensible, como el endpoint de la API,
        únicamente en variables de entorno o archivos de configuración.
       Sin embargo, para fines prácticos en esta prueba, también añado valores estáticos. */
    const endpoint =
      process.env.NEXT_PUBLIC_API_URL || "https://reqres.in/api/users";

    const response = await (
      await import("@/services/fetchServices")
    ).fetchServices.get({
      endpoint
    });

    const data = response?.data || [];

    setUsersData(data);
  } catch (error) {
    setUsersData([]);
  }
};
