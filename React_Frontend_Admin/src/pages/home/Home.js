import React from "react";
import AppLayout from "../../components/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div
        style={{ margin: "5rem" }}
        class="p-5 bg-light rounded-3 text-center"
      >
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-medium">Welcome to Admin Dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            minus architecto. Repudiandae eos delectus suscipit vel, nemo natus,
            nesciunt tenetur blanditiis ipsum error exercitationem, assumenda
            accusamus. Unde dolorum aliquid libero!
          </p>
        </div>
      </div>
    </AppLayout>
  );
};
export default Home;
