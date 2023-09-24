import axios from "axios";

export const fetchTrendingProducts = (
  page,
  setTrendingProducts,
  setLoading,
  setSnackbar,
) => {
  setLoading(true);
  var config = {
    method: "get",
    url: !page
      ? `${process.env.REACT_APP_URL}store/view/product/popular/`
      : `${process.env.REACT_APP_URL}store/view/product/popular/?page=${page}`,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setTrendingProducts(response.data);
    })
    .catch(function (error) {
      setLoading(false);
      setTrendingProducts({
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
            name: "Art Piece one",
            artist: 2,
            category: "accessories",
            subcategory: "bands",
            original_price: "500.00",
            kalafex_price: "525.00",
            display_image:
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3145&q=80",
          },
          {
            pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
            name: "Art Piece two",
            artist: 2,
            category: "accessories",
            subcategory: "bands",
            original_price: "525.00",
            kalafex_price: "551.25",
            display_image:
              "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
          {
            pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
            name: "Art Piece one",
            artist: 2,
            category: "accessories",
            subcategory: "bands",
            original_price: "500.00",
            kalafex_price: "525.00",
            display_image:
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3145&q=80",
          },
          {
            pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
            name: "Art Piece two",
            artist: 2,
            category: "accessories",
            subcategory: "bands",
            original_price: "525.00",
            kalafex_price: "551.25",
            display_image:
              "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
        ],
      });
      if (!page) {
        setSnackbar({
          value: true,
          message: "Could not load trending products",
          type: "error",
        });
      }
    });
};

export const fetchBaseDetailsUser = (
  setUsrBaseInfo,
  setLoading,
  history,
  setSnackbar,
) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}auth/users/me/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setUsrBaseInfo(response.data);
      if (response.data.is_artist && response.data.is_first_login) {
        history.push("/artist/profile");
      }
      if (
        response.data.is_kalafex_admin &&
        window.performance.navigation.type !== 1
      ) {
        // console.log(history);
        history.push("/admin/");
      }
    })
    .catch(function (error) {
      // console.log(error);
      setUsrBaseInfo({
        is_artist: true,
        full_name: "Test User",
        is_kalafex_admin: false,
        is_first_login: true,
        email: "shashwatsatna@gmail.com",
      });

      setLoading(false);
      setSnackbar({
        value: true,
        message: "Could not load user details",
        type: "error",
      });
    });
};

export const fetchSearch = (query, page, setProducts, setLoading) => {
  setLoading(true);
  var config = {
    method: "get",
    url: !page
      ? `${process.env.REACT_APP_URL}store/search/product/?search=${query}`
      : `${process.env.REACT_APP_URL}store/search/product/?search=${query}/?page=${page}`,
  };

  axios(config)
    .then(function (response) {
      setProducts(response.data);
      // console.log(JSON.stringify(response.data));
      setLoading(false);
    })
    .catch(function (error) {
      setLoading(false);
      setProducts({
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
            name: "Art Piece one",
            artist: 2,
            category: "accessories",
            subcategory: "bands",
            original_price: "500.00",
            kalafex_price: "525.00",
            display_image:
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3145&q=80",
          },
          {
            pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
            name: "Art Piece two",
            artist: 2,
            category: "accessories",
            subcategory: "bands",
            original_price: "525.00",
            kalafex_price: "551.25",
            display_image:
              "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
          {
            pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
            name: "Art Piece one",
            artist: 2,
            category: "accessories",
            subcategory: "bands",
            original_price: "500.00",
            kalafex_price: "525.00",
            display_image:
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3145&q=80",
          },
          {
            pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
            name: "Art Piece two",
            artist: 2,
            category: "accessories",
            subcategory: "bands",
            original_price: "525.00",
            kalafex_price: "551.25",
            display_image:
              "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
        ],
      });

      // console.log(error);
    });
};

export const fetchArtistProducts = (id, setTopListings, setLoading) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}store/view/product/artist/${id}/`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      // console.log(response.data);
      setTopListings(response.data);
    })
    .catch(function (error) {
      setTopListings({
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            pid: "552066d7-2463-4d2a-907b-aaeb6005c9dc",
            name: "Brown Rug",
            description: "Well, it's a rug.",
            category: "Lifestyle & Home",
            subcategory: null,
            stock_left: 4,
            demix_price: "3060.00",
            artist: 3,
            original_price: "3000.00",
            discount_price: null,
            display_image:
              "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            image_list: [
              {
                product: "552066d7-2463-4d2a-907b-aaeb6005c9dc",
                image:
                  "https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                mini_description: null,
              },
            ],
          },
          {
            pid: "968501f7-776a-4d57-8e1a-9982edc6ec5d",
            name: "Plain T's",
            description: "A pack of 3 tees.",
            category: "Lifestyle & Home",
            subcategory: null,
            stock_left: 20,
            demix_price: "918.00",
            artist: 3,
            original_price: "900.00",
            discount_price: null,
            display_image:
              "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            image_list: [],
          },
        ],
        total_pages: 1,
      });
      setLoading(false);
      // console.log(error);
    });
};

export const fetchArtistProfile = (setInsights, setLoading, func) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}accounts/view/my_profile/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      func();
      // console.log(response.data);

      setInsights(response.data);
    })
    .catch(function (error) {
      setLoading(false);
      setInsights({
        status: "success",
        details: {
          user: {
            full_name: "Test User",
            is_demix_admin: false,
            is_artist: true,
            is_customer: false,
            is_first_login: false,
            date_of_birth: "2021-04-07",
            phone_number: "123",
            id: 2,
            email: "hari@gmail.com",
          },
          total_views: 0,
          total_sales: 0,
          total_orders: 0,
          bio: "super cool bio",
          custom_url: "normaldude1",
          aadhar_card_no: "1234-5678",
          pan_card_no: "9876-5432",
          gst_no: "1234-5678",
          profile_picture:
            "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          balance: "0.00",
          cashout_requested: false,
        },
      });
      // console.log(error);
    });
};

export const fetchAddress = (setLoading, setUsrAdresses) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}accounts/view_addresses/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setUsrAdresses(response.data);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      setUsrAdresses([
        {
          a_id: "10979fb7-5f78-4853-85cb-18657b1dc9ff",
          street: "221B Baker Street",
          city: "London",
          state: "something",
          pin_code: "100007",
          address_type: "Pickup",
          user: 2,
        },
      ]);
      // console.log(error);
    });
};

export const fetchOrderDetailsFinally = (url, setLoading) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}orders/view/order/${url}/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      // console.log(error);
    });
};

export const allCashoutReq = (setLoading, setCashouts, pagination) => {
  setLoading(true);
  var config = {
    method: "get",
    url:
      pagination === 1
        ? `${process.env.REACT_APP_URL}accounts/view/cashout_requests/`
        : `${process.env.REACT_APP_URL}accounts/view/cashout_requests/?page=${pagination}`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setCashouts(response.data);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      setCashouts({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            user: {
              full_name: "Test User",
              is_demix_admin: false,
              is_artist: true,
              is_customer: false,
              is_first_login: false,
              date_of_birth: "2021-04-07",
              phone_number: "123",
              id: 2,
              email: "hari@gmail.com",
            },
            total_views: 0,
            total_sales: 6300,
            total_orders: 12,
            bio: "super cool bio",
            custom_url: "normaldude1",
            aadhar_card_no: "1234-5678",
            pan_card_no: "9876-5432",
            gst_no: "1234-5678",
            profile_picture:
              "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            balance: "0.00",
            cashout_requested: true,
          },
        ],
      });
      // console.log(error);
    });
};

export const fetchArtistOrders = (setLoading, setArtistOrder) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}orders/view/orderproducts/artist/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setArtistOrder(response.data);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setArtistOrder({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            op_id: "b74c7e8b-24bf-4667-ab51-f0a2d9181737",
            product: {
              pid: "88d954eb-e8fb-46c7-abde-acbb7400d3c0",
              name: "cool gum",
              artist: 1,
              description: "well its cool gum",
              category: "gum",
              subcategory: null,
              original_price: "100.00",
              demix_price: "115.00",
              display_image:
                "https://plus.unsplash.com/premium_photo-1672287578303-a9832c84a2a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              discount_price: null,
              stock_left: 0,
            },
            quantity: 4,
          },
        ],
      });
      setLoading(false);
      // console.log(error);
    });
};

export const getReviewsAll = (id, setReviews) => {
  axios
    .get(`${process.env.REACT_APP_URL}store/reviews/noauth/${id}/`)
    .then(function (response) {
      setReviews(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      setReviews({
        results: [
          {
            rid: "8e2c0a77-c617-4190-bd6c-bd50f0b3e60f",
            user: {
              id: 4,
              full_name: "shashwat gupta",
            },
            rating: 2.5,
            review: "Mediocre",
            product: "552066d7-2463-4d2a-907b-aaeb6005c9dc",
          },
          {
            rid: "e68d8c15-f995-45b7-bc7b-c5ea8a208a97",
            user: {
              id: 40,
              full_name: "Shivam Mehta",
            },
            rating: 3.5,
            review:
              "It's good, but I'd have liked a little more from it. Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time",
            product: "552066d7-2463-4d2a-907b-aaeb6005c9dc",
          },
          {
            rid: "b629b84c-2ef1-4af3-a5bc-08888cc0e651",
            user: {
              id: 48,
              full_name: "Hari",
            },
            rating: 3.5,
            review:
              "It's good, but I'd have liked a little more from it. Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time",
            product: "552066d7-2463-4d2a-907b-aaeb6005c9dc",
          },
        ],
        average_rating: 3.17,
        count: 3,
      });
      // console.log(error);
    });
};

export const getReviewsOther = (id, setReviews) => {
  axios
    .get(`${process.env.REACT_APP_URL}store/reviews/auth/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
    })
    .then(function (response) {
      setReviews(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      setReviews({
        results: [
          {
            rid: "8e2c0a77-c617-4190-bd6c-bd50f0b3e60f",
            user: {
              id: 4,
              full_name: "shashwat gupta",
            },
            rating: 2.5,
            review:
              "It's good, but I'd have liked a little more from it. Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time",
            product: "552066d7-2463-4d2a-907b-aaeb6005c9dc",
          },
          {
            rid: "e68d8c15-f995-45b7-bc7b-c5ea8a208a97",
            user: {
              id: 40,
              full_name: "Shivam Mehta",
            },
            rating: 3.5,
            review:
              "It's good, but I'd have liked a little more from it. Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time Lorem ipsum time",
            product: "552066d7-2463-4d2a-907b-aaeb6005c9dc",
          },
        ],
        average_rating: 3.17,
        count: 2,
      });
      // console.log(error);
    });
};

export const getReviewUser = (id, setReviews) => {
  axios
    .get(`${process.env.REACT_APP_URL}store/review/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
    })
    .then(function (response) {
      setReviews(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      setReviews({});
      // console.log(error);
    });
};
