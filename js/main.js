var bookmarkContainer = [];

var SiteName = document.getElementById('siteName');
var SiteUrl = document.getElementById('siteUrl');




if (localStorage.getItem('bookmarks') != null) {
    bookmarkContainer = JSON.parse(localStorage.getItem('bookmarks'));
    display();
}



function submit() {


    if (SiteName.value == "" && SiteUrl.value == "") {
        errorName();
        errorUrl();

    }
    else if (SiteName.value != "" && SiteUrl.value == "") {
        errorName();
        errorUrl();

    }
    else if (SiteName.value == "" && SiteUrl.value != "") {
        errorUrl();
        errorName();

    }
    else {
        var bookmark = {
            name: siteName.value,
            Url: checkUrl()
        }

        bookmarkContainer.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkContainer));
        display();
        errorName();
        errorUrl();
    }


}


function errorName() {
    if (siteName.value == "") {
        document.getElementById('siteNameError').innerHTML = "Name is required";
    }
    else {
        document.getElementById('siteNameError').innerHTML = null;
    }

}


function errorUrl() {
    if (siteUrl.value == "") {
        document.getElementById('siteUrlError').innerHTML = "Url Field is required";
    }
    else {
        document.getElementById('siteUrlError').innerHTML = null;
    }
}




function display() {

    var table = '';

    for (var i = 0; i < bookmarkContainer.length; i++) {

        table += `<div  class=" py-4 part1">
                <table>
                    <tr>
                        <td> <h2>${bookmarkContainer[i].name}</h2> </td>
                        <td> <a class="btn btn-primary" href="${bookmarkContainer[i].Url}" target="_blank">visit</a> </td>
                        <td> <button onclick="deleteBookmark(${i})" class="btn btn-danger mx-2 ">Delete</button> </td>
                    </tr>
                 </table>
            </div>`

    }

    document.getElementById('display').innerHTML = table;
}

function deleteBookmark(index) {

    bookmarkContainer.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkContainer));
    display();
}

function checkUrl() {
    if (SiteUrl.value.indexOf("http://") == -1) {
        return "http://" + SiteUrl.value;
    }
    else {
        return SiteUrl.value
    }
}

function siteNameValidat() {

    var regex = /^[A-Z][a-z]{3-7}/;

    if (regex.test(SiteName.value) == true) {
        return true;
    }
    else {
        return false;
    }
}