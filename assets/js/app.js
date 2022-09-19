$(document).ready(function() {
    $(".list").hide();
    $(".include").hide();
    $(".edit").hide();
    $(".delete").hide();

    // Add the event click in the div consult
    $("#consult").click(function(e){
        e.preventDefault();

        $(".include").hide();
        $(".edit").hide();
        $(".delete").hide();

        let htmlList = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>31</td>
                        <td>Adminstração</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Recursos humanos</td>
                    </tr>
                </tbody>
            </table>
        `

        $(".list").empty();
        $(".list").append(htmlList).fadeIn();
    });

    // Add the event clicl in the div include
    $("#include").click(function(e){
        e.preventDefault();

        $(".list").hide();
        $(".edit").hide();
        $(".delete").hide();

        let htmlInclude = `
            <div class="form-group">
                <div class="col-2">
                    <label for="code">Código</label>
                    <input type="number" name="code" id="code" min="0" max="1000"/>
                </div>
                <div class="col-10">
                    <label for="text-include">Descrição</label>
                    <input type="text" name="text-include" id="text_include_input"/>
                </div>
            </div>
            <div class="button-area">
                <button class="button" id="save-include">Salvar</button>
            </div>
        `
        $(".include").empty();
        $(".include").append(htmlInclude).fadeIn();

        $("#save-include").click(function(e) {
            let code = $("#code").val();
            let text = $("#text_include_input").val();

            if(code && text) {
                Swal.fire(
                    'Bom trabalho!',
                    'Dados salvos com sucesso.',
                    'success'
                )
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Aviso',
                    text: 'Preencha os campos de código e descrição!',
                });
            }
        });
    });

    // Add event click in the div edit
    $("#edit").click(function(e){
        e.preventDefault();

        $(".include").hide();
        $(".list").hide();
        $(".delete").hide();

        let htmlEdit = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td contenteditable>31</td>
                        <td contenteditable>Adminstração</td>
                    </tr>
                    <tr>
                        <td contenteditable>31</td>
                        <td contenteditable>Recursos humanos</td>
                    </tr>
                </tbody>
            </table>

            <div class="button-area">
                <button class="button" id="save-edit">Salvar</button>
            </div>
        `

        $(".edit").empty();
        $(".edit").append(htmlEdit).fadeIn();

        $("#save-edit").click(function(e) {
            Swal.fire(
                'Bom trabalho!',
                'Dados editados com sucesso.',
                'success'
            )
        });
    });

    // Add event click in the div delete
    $("#delete").click(function(e){
        e.preventDefault();

        $(".list").hide();
        $(".include").hide();
        $(".edit").hide();

        let html = `
                <table class="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>31</td>
                        <td>Adminstração</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Recursos humanos</td>
                    </tr>
                </tbody>
            </table>
            <div class="button-area">
                <button class="button" id="delete-button">Salvar</button>
            </div>
        `

        $(".delete").empty();
        $(".delete").append(html).fadeIn();

        // Add event click for delete item fake
        $(".delete td").dblclick(function(e){
            let res = confirm("Tem certeza que deseja excluir?");
            if(res) {
                Swal.fire(
                    'Bom trabalho!',
                    'Deletado com sucesso.',
                    'success'
                )
            }
        });
        

        $("#delete-button").click(function(e) {
            Swal.fire(
                'Bom trabalho!',
                'Dados salvos com sucesso.',
                'success'
            )
        });
    });
});