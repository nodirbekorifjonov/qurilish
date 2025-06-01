<script lang="ts" setup>
defineProps({
  building: Object,
});
</script>

<template>
  <div class="card">
    <div class="card-inner" style="--clr: #fff">
      <div class="box">
        <div class="imgBox">
          <img src="../assets/first.jpg" alt="Trust & Co." />
        </div>
        <div class="icon">
          <RouterLink :to="`/buildings/${building.id}`" class="iconBox">
            <span class="-rotate-45"
              ><i class="fa-solid fa-arrow-right"></i>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="content">
      <h3>{{ building.projectName }}</h3>
      <p>{{ building.location }}</p>
      <ul>
        <li style="--clr-tag: #d3b19a" class="branding">
          {{ building.totalApartments }} xonadon
        </li>
        <li style="--clr-tag: #70b3b1" class="packaging">
          {{ building.availableApartments }} mavjud
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 22rem;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.card-inner {
  position: relative;
  height: 18.75rem;
  background: var(--clr);
  border-bottom-right-radius: 0;
  overflow: hidden;
}

.box {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;
}

.imgBox {
  width: 100%;
  height: 100%;
}

.imgBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.icon {
  position: absolute;
  bottom: -0.375rem;
  right: -0.375rem;
  width: 6rem;
  height: 6rem;
  background: var(--clr);
  border-top-left-radius: 50%;
}

.icon::before {
  content: "";
  position: absolute;
  bottom: 0.375rem;
  left: -1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  box-shadow: 0.313rem 0.313rem 0 0.313rem #fff;
  background: transparent;
}

.icon::after {
  content: "";
  position: absolute;
  top: -1.25rem;
  right: 0.375rem;
  width: 1.25rem;
  height: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  box-shadow: 0.313rem 0.313rem 0 0.313rem var(--clr);
  background: transparent;
}

.iconBox {
  position: absolute;
  inset: 0.625rem;
  background: #0174ec;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
}

.iconBox:hover {
  transform: scale(1.1);
}

.iconBox span {
  color: #fff;
  font-size: 1.5rem;
}

.content {
  padding: 1rem;
}

.content h3 {
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.content p {
  color: #565656;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

ul li {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--clr-tag);
  color: #282828;
  padding: 0.4rem 0.7rem;
  border-radius: 0.2rem;
}
</style>
