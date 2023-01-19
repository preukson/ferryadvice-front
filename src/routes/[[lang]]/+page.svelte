<script>
import { _ } from 'svelte-i18n'
import { page } from '$app/stores'
import './styles.css';

$: console.log($page) //ถ้าจะ Track ตัวแปร ต้องอยู่ภายใต้ $:

</script>

<svelte:head>
	<title>จองเรือข้ามเกาะ Ferry & Speedboat จองเรือข้ามเกาะพร้อมเดินทางได้ทันทีกับ Ferry Advice</title>
	<meta name="description" content="Mobilekit HTML Mobile UI Kit">
	<meta name="keywords" content="bootstrap 5, mobile template, cordova, phonegap, mobile, html" />
	<!-- Splide -->
</svelte:head>


<section>
	
	<div class="search-form pt-2">
		<div class="searchnav nav d-flex flex-nowrap gap-3 scrolling-wrapper" role="tablist">
			<a href="" class="nav-link active" data-bs-toggle="tab" data-bs-target="#home-tab-pane"><img src="/assets/img/icon/ferry_icon.png" alt="">	 Ferry Bus</a>
			<!-- <a href="" class="nav-link" data-bs-toggle="tab" data-bs-target="#home-tab-pane2"><img src="/assets/img/icon/flight_icon.png" alt=""> Flight</a>
			<a href="" class="nav-link" data-bs-toggle="tab" data-bs-target="#home-tab-pane3"><img src="/assets/img/icon/train_icon.png" alt=""> Train</a>
			<a href="" class="nav-link" data-bs-toggle="tab" data-bs-target="#home-tab-pane4"><img src="/assets/img/icon/activities_icon.png" alt=""> Activities</a> -->
		</div>
		<div class="search-inner rounded">
			<div class="form-floating mb-2">
				<select name="from_id" class="form-select border-0" id="fromId" aria-label="From">
					<option selected>Bangkok</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<label for="fromId">From</label>
			</div>
			<div class="form-floating mb-3">
				<select name="from_id" class="form-select border-0" id="toId" aria-label="To">
					<option selected>Chiang mai</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<label for="toId">To</label>
			</div>
			<div class="input-group">
				<div class="form-floating">
					<input type="date" name="depart_date" class="form-control border-0" id="">
					<label for="toId">Departure date</label>
				</div>
				<div class="form-floating">
					<input type="date" name="depart_date" class="form-control border-0" id="">
					<label for="toId">Return date</label>
				</div>
			</div>
			<div class="p-2">
				<button class="btn btn-danger btn-block">Search</button>
			</div>
		</div>
	</div>
	<div class="section full mt-3 mb-3">
		<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
			<div class="carousel-indicators">
			  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
			  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
			  <div class="carousel-item active">
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_800,h_342/v1670480414/banner/bp3wudiewk6dwiwn1pea.webp" class="d-block w-100 " alt="...">
			  </div>
			  <div class="carousel-item">
				<img src="https://ik.imagekit.io/ferryadvice/uploads/feature_image/ferryadvice-booking-bus-and-ferry-to-koh-kood-mak-chang-samui-tao-phangan-phiphi16565696922839.jpg?tr=w-400,h-300" class="d-block w-100 " alt="...">
			  </div>
			  <div class="carousel-item">
				<img src="https://via.placeholder.com/400x300" class="d-block w-100 " alt="...">
			  </div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
			  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			  <span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
			  <span class="carousel-control-next-icon" aria-hidden="true"></span>
			  <span class="visually-hidden">Next</span>
			</button>
		  </div>
	</div>
	<div class="section  mt-3 mb-3">
		<div class="row mb-2">
			<div class="col"><h3 class="mb-0">{$_('home.top_destination')}</h3></div>
		</div>
		<div class="row">
			<div class="col">
				<div class="d-flex flex-nowrap gap-3 py-1 scrolling-wrapper">
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							ประเทศไทย
						</div>
					</div>
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							มาเลเซีย
						</div>
					</div>
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							กัมพูชา
						</div>
					</div>
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							เวียดนาม
						</div>
					</div>
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							ลาว
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row">
			<div class="col"><a class="btn rounded-pill btn-outline-secondary btn-block">{$_('home.viewmore')}</a></div>
		</div>
	</div>
	<div class="section mt-3 mb-3">
		<div class="row mb-2">
			<div class="col"><h3 class="mb-0">{$_('home.top_island')}</h3></div>
		</div>
		<div class="row">
			<div class="col">
				<div class="d-flex flex-nowrap gap-3 py-1 scrolling-wrapper">
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							เกาะกระดาน Koh
						</div>
					</div>
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							เกาะกระดาน Koh
						</div>
					</div>
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							เกาะกระดาน Koh
						</div>
					</div>
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							เกาะกระดาน Koh
						</div>
					</div>
					<div class="card">
						<div class="flex-shrink-0">
							<img src="https://ik.imagekit.io/ferryadvice/uploads/island/1509273038.jpg?tr=w-185,h-100" class="rounded">
						</div>
						<div class="flex-grow-1 ms-3">
							เกาะกระดาน Koh
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col"><a class="btn rounded-pill btn-outline-secondary btn-block">{$_('home.viewmore')}</a></div>
		</div>
	</div>
	<div class="section mt-3 mb-3">
		<div class="row mb-2">
			<div class="col"><h3 class="mb-0 pb-0">{ $_('home.review_title')}</h3></div>
		</div>
		<div class="row gy-4 row-cols-2 row-col-lg-3">
			<div class="col">
				<div class="card">
					<img src="https://ik.imagekit.io/ferryadvice/uploads/feature_image/1671779578booking-busferry-kohphiphi-phuket-krabi-kohkood-chang-samui-tao-phangan-วิธีการเดินทางไปเกาะเต่า-02 ไทย.jpg?tr=w-380,h-210" class="card-img-top" alt="image">
					<div class="p-1">
						วิธีการเดินทางไปเกาะเต่า ฉบับสมบูรณ์
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					<img src="https://ik.imagekit.io/ferryadvice/uploads/feature_image/1671848676booking-busferry-kohphiphi-phuket-krabi-kohkood-chang-samui-tao-phangan-ดำน้ำหมู่เกาะรัง-03.jpg?tr=w-380,h-210" class="card-img-top" alt="image">
					<div class="p-1">
						ทริปดำน้ำตกหมึกเกาะกูด
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					<img src="https://ik.imagekit.io/ferryadvice/uploads/feature_image/1671525907booking-busferry-kohphiphi-phuket-krabi-kohkood-chang-samui-tao-phangan-เที่ยวเกาะยาวน้อย.jpg?tr=w-380,h-210" class="card-img-top" alt="image">
					<div class="p-1">
						เที่ยวเกาะยาวน้อย
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					<img src="https://ik.imagekit.io/ferryadvice/uploads/feature_image/1671525907booking-busferry-kohphiphi-phuket-krabi-kohkood-chang-samui-tao-phangan-เที่ยวเกาะยาวน้อย.jpg?tr=w-380,h-210" class="card-img-top" alt="image">
					<div class="p-1">
						เที่ยวเกาะยาวน้อย
					</div>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col"><a class="btn rounded-pill btn-outline-secondary btn-block">{$_('home.viewmore')}</a></div>
		</div>
	</div>
	<div class="section mt-3 mb-3">
		<div class="row mb-2">
			<div class="col"><h3 class="mb-0 pb-0">{ $_('home.allroute_title')}</h3></div>
		</div>
	</div>
	<div class="section full mt-3 mb-3">
		<div class="row mb-2">
			<div class="col">
				<a class="btn bg-body shadow rounded-0 btn-block toproute_button" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					Route from Bangkok
				</a>
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<div class="toproute_wrapper d-flex justify-content-between flex-wrap row-cols-2 row-col-lg-4">
							<a href="">Bangkok to Koh Kood</a>
							<a href="">Bangkok to Koh Kood</a>
							<a href="">Bangkok to Koh Kood</a>
							<a href="">Bangkok to Koh Kood</a>
						</div>
					</div>
				</div>
				<a class="btn bg-body mt-1 shadow rounded-0 btn-block toproute_button" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
					Route from Trat
				</a>
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<div class="toproute_wrapper d-flex justify-content-between flex-wrap row-cols-2 row-col-lg-4">
							<a href="">Bangkok to Koh Kood</a>
							<a href="">Bangkok to Koh Kood</a>
							<a href="">Bangkok to Koh Kood</a>
							<a href="">Bangkok to Koh Kood</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang=scss>

</style>
