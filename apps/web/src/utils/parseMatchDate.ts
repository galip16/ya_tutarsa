export const parseMatchDate = (dateStr: string) => {
    const [date, time] = dateStr.split(' ');  // '27.11' ve '18:00' olarak ayırıyoruz
    const [day, month] = date.split('.');    // '27' ve '11' olarak ayırıyoruz
    const [hour, minute] = time.split(':');  // '18' ve '00' olarak ayırıyoruz
  
    // Gün, ay ve yıl (2024'ü varsayıyoruz) ile Date objesi oluşturuyoruz
    return new Date(2024, parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
  };