// Format Date Helper Function
export function formatDate (dateString) {
  let yyyymmdd = JSON.stringify(dateString).split('T')[0].split('"').join('');
  var date = new Date(yyyymmdd);
    if (!isNaN(date.getTime())) {
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }
}