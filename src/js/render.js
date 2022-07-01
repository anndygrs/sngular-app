const showData = (data) => {
    var station;
    var table = document.getElementById('info-table');
    for (var a = 1; a < data.length; a++) {
        station = data[a]['stations'][0];
        var name = station['name'];
        if (name != 'station') {
            var state = station['source_id'];

            var info = station['indexes'][0];
            var hour = info['calculationTime'];
            var imecaValue = info['value'];

            var newName = document.createElement('td');
            var newState = document.createElement('td');
            var newValue = document.createElement('td');
            var newHour = document.createElement('td');
            var newRow = document.createElement('tr');

            newName.textContent = name;
            newRow.appendChild(newName);
            newState.textContent = state;
            newRow.appendChild(newState);
            newValue.textContent = imecaValue;
            newRow.appendChild(newValue);
            newHour.textContent = formatDate(hour);
            newRow.appendChild(newHour);
            table.appendChild(newRow);
        }
    }
}

const formatDate = (date) => {
    var longDate = Date(date);
    var index = longDate.indexOf('GMT');
    if (index != -1) {
        var newDate = longDate.substring(0, index - 1);
        return newDate;
    } else {
        return longDate;
    }
}