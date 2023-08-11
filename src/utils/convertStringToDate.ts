export function convertStringToDate(dateString: string) {
  // 21/04/2023 15:00
  const [day, month, yearAndHour] = dateString.split("/");
  const [year, hour] = yearAndHour.split(" ");
  const [hours, minutes] = hour.split(":");

  // Os meses em JavaScript são indexados a partir do 0 (janeiro = 0, fevereiro = 1, etc.)
  const convertedDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hours),
    Number(minutes)
  );

  return convertedDate;
}
