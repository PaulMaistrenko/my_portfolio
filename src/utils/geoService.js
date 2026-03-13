
export const getUserCountry = async () => {
  try {
    const response = await fetch('https://ipwhois.app/json/');
    const data = await response.json();
    return data.country_code || 'Unknown';
  } catch (error) {
    console.error('Ошибка при определении страны:', error);
    return 'Unknown';
  }
};
