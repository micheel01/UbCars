function deletarItem(row) {
    var confirmacao = confirm("Tem certeza que deseja excluir este item?");
    // função para confirmar a exclusão do item

    if (confirmacao) {
        var rowIndex = row.rowIndex;
        document.getElementById("tabela").deleteRow(rowIndex);
    }
}

function abrirTab(evt, tabName) {
        var i, tabcontent, tablinks;

        // Oculta todo o conteúdo das guias
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove a classe 'active' de todos os botões de guia
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Exibe o conteúdo da guia atual e define a classe 'active' para o botão
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Abra a primeira guia por padrão
    document.getElementsByClassName("tablinks")[0].click();