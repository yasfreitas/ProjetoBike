function ModalCompra(){
    Swal.fire({
        title: "Deseja finalizar a compra?",
        text: "Finaalizar a compra, adicione as informações conforme pedido.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, Finalizar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra Finalizada",
            text: "Compra finalizada!",
            icon: "success"
          });
        }
      });
}

function ModalAdd(){
    Swal.fire({
        title: "Item adicionado ao carrinho!",
        text: "Item foi adicionado ao seu carrinho.",
        icon: "success"
      });
}
