<template>
  <div class="card-pack">
    <div class="hc-card">
      <p>All Leaves</p>
      <h1>20</h1>
    </div>
    <div class="hc-card">
      <p>Approved Leaves</p>
      <h1>20</h1>
    </div>
    <div class="hc-card">
      <p>Pending Leaves</p>
      <h1>20</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card-pack {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-block: 30px;
}

.hc-card {
  width: 270px;
  height: 100px;
  border-radius: 20px;
  background-color: #21D4FD;
  background-color: #FF3CAC;
  background-image: linear-gradient(225deg, #FF3CAC 0%, #471573 46%, #133652 100%);
  color: #fff;
  padding: 20px;
  margin: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.hc-card p {
  font-size: 1.2rem;
}

.hc-card h1{
  font-size: 3.2rem;
  font-weight: bold;
}
</style>