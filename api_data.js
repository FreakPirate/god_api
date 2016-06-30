define({ "api": [
  {
    "type": "get",
    "url": "/categories",
    "title": "List",
    "version": "0.2.0",
    "name": "GetCategories",
    "group": "Category",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Lists all categories of deities present in the database. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://freakpirate.ddns.net:8080/v2/categories",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of categories present in the database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all categories present in the database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Category ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Category title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.vital",
            "description": "<p>Is this vital or trivial category. *                                       Possible values: <code>0</code> or <code>1</code> *                                       <code>1</code>: Vital *                                       <code>0</code>: Trivial *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 6, \n    \"result\": [\n        {\n            \"id\": 1, \n            \"name\": \"KRISHNA\", \n            \"vital\": 1\n        }, \n        {\n            \"id\": 2, \n            \"name\": \"RAM\", \n            \"vital\": 1\n        }, \n        {\n            \"id\": 3, \n            \"name\": \"SHIVA\", \n            \"vital\": 1\n        }, \n        {\n            \"id\": 4, \n            \"name\": \"HANUMAN\", \n            \"vital\": 1\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "List",
    "version": "0.1.0",
    "name": "GetCategories",
    "group": "Category",
    "permission": [
      {
        "name": "none\n    *"
      }
    ],
    "description": "<p>Lists all categories of deities present in the database. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://freakpirate.ddns.net:8080/v1.0/categories",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of categories present in the database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all categories present in the database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Category ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Category title. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"count\":6,\"result\":[{\"id\":1,\"name\":\"KRISHNA\"},{\"id\":2,\"name\":\"RAM\"},{\"id\":3,\"name\":\"SHIVA\"},{\"id\":4,\"name\":\"HANUMAN\"},{\"id\":5,\"name\":\"GANESHA\"},{\"id\":6,\"name\":\"PARVATI\"}]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.py",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/<id>",
    "title": "List Wallpaper",
    "version": "0.2.0",
    "name": "GetCategoryWallpaper",
    "group": "Category",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Lists all wallpapers present in the category specified by <code>id</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://freakpirate.ddns.net:8080/v2/category/6",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The category ID. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of wallpapers present in specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Array of all wallpapers present in the specified category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 1, \n    \"result\": [\n        {\n            \"category_id\": 6, \n            \"down_votes\": 0, \n            \"download_count\": 0, \n            \"favourite_count\": 0, \n            \"id\": 2, \n            \"image_aspect_ratio\": \"1200x1900\", \n            \"image_hash\": \"adfrvrtvb\", \n            \"image_path\": \"/etc\", \n            \"image_thumbnail\": \"sdflajir.png\", \n            \"image_title\": \"asd.jpg\", \n            \"total_votes\": 0, \n            \"up_votes\": 0, \n            \"view_count\": 10\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingCategoryId",
            "description": "<p>The <code>id</code> of the category was missing. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 404 Not Found\n*     {\n*       \"error\": \"404 Not Found\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/<id>",
    "title": "List Wallpaper",
    "version": "0.1.0",
    "name": "GetCategoryWallpaper",
    "group": "Category",
    "permission": [
      {
        "name": "none\n    *"
      }
    ],
    "description": "<p>Lists all wallpapers present in the category specified by <code>id</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://freakpirate.ddns.net:8080/v1.0/category/6",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The category ID. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of wallpapers present in specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Array of all wallpapers present in the specified category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.upvotes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.downvotes",
            "description": "<p>Down votes on image. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 1, \n    \"result\": [\n        {\n            \"CATEGORY_ID\": 1, \n            \"DOWN_VOTES\": 4, \n            \"ID\": 1, \n            \"IMAGE_ASPECT_RATIO\": \"800x1200\", \n            \"IMAGE_HASH\": \"asfdfvioner\", \n            \"IMAGE_PATH\": \"/dev\", \n            \"IMAGE_THUMB\": \"iewonoiw.png\", \n            \"IMAGE_TITLE\": \"ABC.jpg\", \n            \"TOTAL_VOTES\": 15, \n            \"UP_VOTES\": 11\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingCategoryId",
            "description": "<p>The <code>id</code> of the category was missing. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 404 Not Found\n*     {\n*       \"error\": \"404 Not Found\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.py",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/wallpaper/popular",
    "title": "Popular",
    "version": "0.2.0",
    "name": "GetPopularWallpaper",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Provides a list of all <strong>Popular</strong> wallapers. Popular wallpapers are identified based on <code>views</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -X GET -i http://freakpirate.ddns.net:8080/v2/wallpaper/popular?limit=1&page=1",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Optional      Number of wallpapers to list in a page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Optional      Serial number of page to fetch (Used to implement pagination). *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the current query.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of wallpapers present in specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Array of all wallpapers present in the specified category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 1, \n    \"page\": 1, \n    \"result\": [\n        {\n            \"category_id\": 2, \n            \"down_votes\": 0, \n            \"download_count\": 0, \n            \"favourite_count\": 0, \n            \"id\": 2, \n            \"image_aspect_ratio\": \"1200x1900\", \n            \"image_hash\": \"adfrvrtvb\", \n            \"image_path\": \"/etc\", \n            \"image_thumbnail\": \"sdflajir.png\", \n            \"image_title\": \"asd.jpg\", \n            \"total_votes\": 0, \n            \"up_votes\": 0, \n            \"view_count\": 10\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "get",
    "url": "/wallpaper/random",
    "title": "Random",
    "version": "0.2.0",
    "name": "GetRandomWallpaper",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Gives list of a wallpapers picked randomly, irrespective of <code>id</code> &amp; <code>vote</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://freakpirate.ddns.net:8080/v2/wallpaper/random?limit=1",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1",
            "description": "<p>Optional      Number of wallpapers to list. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of wallpapers present in specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Array of all wallpapers present in the specified category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 1, \n    \"result\": [\n        {\n            \"category_id\": 2, \n            \"down_votes\": 0, \n            \"download_count\": 0, \n            \"favourite_count\": 0, \n            \"id\": 2, \n            \"image_aspect_ratio\": \"1200x1900\", \n            \"image_hash\": \"adfrvrtvb\", \n            \"image_path\": \"/etc\", \n            \"image_thumbnail\": \"sdflajir.png\", \n            \"image_title\": \"asd.jpg\", \n            \"total_votes\": 0, \n            \"up_votes\": 0, \n            \"view_count\": 10\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "get",
    "url": "/wallpaper/random",
    "title": "Random",
    "version": "0.1.0",
    "name": "GetRandomWallpaper",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n    *"
      }
    ],
    "description": "<p>Gives list of a wallpapers picked randomly, irrespective of <code>id</code> &amp; <code>vote</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://freakpirate.ddns.net:8080/v1.0/wallpaper/random?limit=2",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1",
            "description": "<p>Optional      Number of wallpapers to list. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of wallpapers present in specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Array of all wallpapers present in the specified category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.upvotes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.downvotes",
            "description": "<p>Down votes on image. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 2, \n    \"result\": [\n        {\n            \"CATEGORY_ID\": 2, \n            \"DOWN_VOTES\": 0, \n            \"ID\": 2, \n            \"IMAGE_ASPECT_RATIO\": \"1200x1900\", \n            \"IMAGE_HASH\": \"adfrvrtvb\", \n            \"IMAGE_PATH\": \"/etc\", \n            \"IMAGE_THUMB\": \"sdflajir.png\", \n            \"IMAGE_TITLE\": \"asd.jpg\", \n            \"TOTAL_VOTES\": 0, \n            \"UP_VOTES\": 0\n        }, \n        {\n            \"CATEGORY_ID\": 1, \n            \"DOWN_VOTES\": 4, \n            \"ID\": 1, \n            \"IMAGE_ASPECT_RATIO\": \"800x1200\", \n            \"IMAGE_HASH\": \"asfdfvioner\", \n            \"IMAGE_PATH\": \"/dev\", \n            \"IMAGE_THUMB\": \"iewonoiw.png\", \n            \"IMAGE_TITLE\": \"ABC.jpg\", \n            \"TOTAL_VOTES\": 15, \n            \"UP_VOTES\": 11\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "get",
    "url": "/wallpaper",
    "title": "Specified Wallpaper",
    "version": "0.2.0",
    "name": "GetSpecifiedWallpaper",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Provide details of wallpaper specified using <code>id</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://freakpirate.ddns.net:8080/v2/wallpaper?id=1",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory      Id of requested wallpaper. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all wallpapers present in the specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.0 200 OK\nContent-Type: application/json\nContent-Length: 335\nServer: Werkzeug/0.10.4 Python/2.7.10\nDate: Thu, 23 Jun 2016 09:43:38 GMT\n{\n    \"result\": {\n        \"category_id\": 1, \n        \"down_votes\": 4, \n        \"download_count\": 2, \n        \"favourite_count\": 2, \n        \"id\": 1, \n        \"image_aspect_ratio\": \"800x1200\", \n        \"image_hash\": \"asfdfvioner\", \n        \"image_path\": \"/dev\", \n        \"image_thumbnail\": \"iewonoiw.png\", \n        \"image_title\": \"ABC.jpg\", \n        \"total_votes\": 15, \n        \"up_votes\": 11, \n        \"view_count\": 2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterId",
            "description": "<p>The <code>id</code> is missing. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 404 Not Found\n*     {\n*        \"error_type\": \"HTTP/1.1 400 Bad Request\",\n*        \"error\": \"MissingParameter 'id'\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "get",
    "url": "/wallpaper",
    "title": "Specified Wallpaper",
    "version": "0.1.0",
    "name": "GetSpecifiedWallpaper",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n    *"
      }
    ],
    "description": "<p>Provide details of wallpaper specified using <code>id</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://freakpirate.ddns.net:8080/v1.0/wallpaper?id=1",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory      Id of requested wallpaper. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all wallpapers present in the specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.upvotes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.downvotes",
            "description": "<p>Down votes on image. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.0 200 OK\nContent-Type: application/json\nContent-Length: 335\nServer: Werkzeug/0.10.4 Python/2.7.10\nDate: Thu, 23 Jun 2016 09:43:38 GMT\n{  \n   \"result\":{  \n      \"CATEGORY_ID\":1,\n      \"DOWN_VOTES\":4,\n      \"ID\":1,\n      \"IMAGE_ASPECT_RATIO\":\"800x1200\",\n      \"IMAGE_HASH\":\"asfdfvioner\",\n      \"IMAGE_PATH\":\"/dev\",\n      \"IMAGE_THUMB\":\"iewonoiw.png\",\n      \"IMAGE_TITLE\":\"ABC.jpg\",\n      \"TOTAL_VOTES\":15,\n      \"UP_VOTES\":11\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterId",
            "description": "<p>The <code>id</code> is missing. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 404 Not Found\n*     {\n*        \"error_type\": \"HTTP/1.1 400 Bad Request\",\n*        \"error\": \"MissingParameter 'id'\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "get",
    "url": "/wallpaper/top_rated",
    "title": "Top Rated",
    "version": "0.2.0",
    "name": "GetTopRatedWallpaper",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Provides a list of all <strong>Top rated</strong> wallapers. Top rated wallpapers are identified based on <code>votes</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -X GET -i http://freakpirate.ddns.net:8080/v2/wallpaper/top_rated?limit=1&page=2",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Optional      Number of wallpapers to list in a page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Optional      Serial number of page to fetch (Used to implement pagination). *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the current query.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of wallpapers present in specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Array of all wallpapers present in the specified category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 1, \n    \"page\": 2, \n    \"result\": [\n        {\n            \"category_id\": 2, \n            \"down_votes\": 0, \n            \"download_count\": 0, \n            \"favourite_count\": 0, \n            \"id\": 2, \n            \"image_aspect_ratio\": \"1200x1900\", \n            \"image_hash\": \"adfrvrtvb\", \n            \"image_path\": \"/etc\", \n            \"image_thumbnail\": \"sdflajir.png\", \n            \"image_title\": \"asd.jpg\", \n            \"total_votes\": 0, \n            \"up_votes\": 0, \n            \"view_count\": 10\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "get",
    "url": "/wallpaper/top_rated",
    "title": "Top Rated",
    "version": "0.1.0",
    "name": "GetTopRatedWallpaper",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n    *"
      }
    ],
    "description": "<p>Provides a list of all <strong>Top rated</strong> wallapers. Top rated wallpapers are identified based on <code>votes</code>. Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -X GET -i http://freakpirate.ddns.net:8080/v1.0/wallpaper/top_rated?limit=1&page=2",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Optional      Number of wallpapers to list in a page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Optional      Serial number of page to fetch (Used to implement pagination). *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the current query.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of wallpapers present in specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Array of all wallpapers present in the specified category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.upvotes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.downvotes",
            "description": "<p>Down votes on image. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 1, \n    \"page\": 2, \n    \"result\": [\n        {\n            \"CATEGORY_ID\": 2, \n            \"DOWN_VOTES\": 0, \n            \"ID\": 2, \n            \"IMAGE_ASPECT_RATIO\": \"1200x1900\", \n            \"IMAGE_HASH\": \"adfrvrtvb\", \n            \"IMAGE_PATH\": \"/etc\", \n            \"IMAGE_THUMB\": \"sdflajir.png\", \n            \"IMAGE_TITLE\": \"asd.jpg\", \n            \"TOTAL_VOTES\": 0, \n            \"UP_VOTES\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "put",
    "url": "/vote",
    "title": "Vote",
    "version": "0.2.0",
    "name": "PostVote",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Updates vote value of wallpaper specified by <code>id</code> &amp; <code>vote</code>. Output Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -X PUT -d \"id=1&vote=up\" -i http://freakpirate.ddns.net:8080/v2/vote",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory      Number of wallpapers to list in a page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vote",
            "description": "<p>Mandatory      Serial number of page to fetch (Used to implement pagination). *                                              Possible Values: <code>up</code> or <code>down</code> *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all wallpapers present in the specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterId",
            "description": "<p>The parameter <code>id</code> (wallpaper_id) is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterVote",
            "description": "<p>The parameter <code>vote</code> is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotFound",
            "description": "<p>Image whose vote to be updated is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VoteValueError",
            "description": "<p>The value of parameter <code>vote</code> is incorrect (PossibleValues: up/down).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateError",
            "description": "<p>Error caused by fault of server or network. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 400 Bad Request\n*     {\n*        \"error_type\": \"HTTP/1.1 400 Bad Request\",\n*        \"error\": \"MissingParameter 'vote'\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "post",
    "url": "/vote",
    "title": "Vote",
    "version": "0.1.0",
    "name": "PostVote",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n    *"
      }
    ],
    "description": "<p>Updates vote value of wallpaper specified by <code>id</code> &amp; <code>vote</code>. Output Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -X POST -d \"id=1&vote=up\" -i http://freakpirate.ddns.net:8080/v1.0/vote",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory      Number of wallpapers to list in a page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vote",
            "description": "<p>Mandatory      Serial number of page to fetch (Used to implement pagination). *                                              Possible Values: <code>up</code> or <code>down</code> *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all wallpapers present in the specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.upvotes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.downvotes",
            "description": "<p>Down votes on image. *</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterId",
            "description": "<p>The parameter <code>id</code> (wallpaper_id) is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterVote",
            "description": "<p>The parameter <code>vote</code> is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotFound",
            "description": "<p>Image whose vote to be updated is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VoteValueError",
            "description": "<p>The value of parameter <code>vote</code> is incorrect (PossibleValues: up/down).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateError",
            "description": "<p>Error caused by fault of server or network. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 400 Bad Request\n*     {\n*        \"error_type\": \"HTTP/1.1 400 Bad Request\",\n*        \"error\": \"MissingParameter 'vote'\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "put",
    "url": "/downloads",
    "title": "Downloads",
    "version": "0.2.0",
    "name": "UpdateDownloads",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Increment number of downloads of wallpaper specified by <code>id</code>. Output Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -X PUT -d \"id=1\" -i http://freakpirate.ddns.net:8080/v2/download",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory      Number of wallpapers to list in a page. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all wallpapers present in the specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterId",
            "description": "<p>The parameter <code>id</code> (wallpaper_id) is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotFound",
            "description": "<p>Image whose vote to be updated is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateError",
            "description": "<p>Error caused by fault of server or network. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 400 Bad Request\n*     {\n*        \"error_type\": \"HTTP/1.1 400 Bad Request\",\n*        \"error\": \"MissingParameter 'id'\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "put",
    "url": "/favourite",
    "title": "Favourites",
    "version": "0.2.0",
    "name": "UpdateFavourites",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Increment number of times a wallpaper was stored in device persistent storage specified by <code>id</code>. Output Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -X PUT -d \"id=1\" -i http://freakpirate.ddns.net:8080/v2/favourite",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory      Number of wallpapers to list in a page. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all wallpapers present in the specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterId",
            "description": "<p>The parameter <code>id</code> (wallpaper_id) is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotFound",
            "description": "<p>Image whose vote to be updated is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateError",
            "description": "<p>Error caused by fault of server or network. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 400 Bad Request\n*     {\n*        \"error_type\": \"HTTP/1.1 400 Bad Request\",\n*        \"error\": \"MissingParameter 'id'\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Wallpaper"
  },
  {
    "type": "put",
    "url": "/view",
    "title": "View",
    "version": "0.2.0",
    "name": "UpdateView",
    "group": "Wallpaper",
    "permission": [
      {
        "name": "none\n        *"
      }
    ],
    "description": "<p>Increment number of views of wallpaper specified by <code>id</code>. Output Output Format: JSON *</p>",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -X PUT -d \"id=1\" -i http://freakpirate.ddns.net:8080/v2/view",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory      Number of wallpapers to list in a page. *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of all wallpapers present in the specified category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>The wallpaper ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_title",
            "description": "<p>Title of wallpaper.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_path",
            "description": "<p>Relative path to actual image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_hash",
            "description": "<p>Hash value of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_thumb",
            "description": "<p>Relative path to thumbnail file of image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.image_aspect_ratio",
            "description": "<p>Aspect ratio of image. E.g: 780x1280</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.category_id",
            "description": "<p>Id of the category to which the image belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total_votes",
            "description": "<p>Total votes on image, sum of up and down votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.up_votes",
            "description": "<p>Up votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.down_votes",
            "description": "<p>Down votes on image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.view_count",
            "description": "<p>Number of times the image is viewed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.favourite_count",
            "description": "<p>Number of times the image is marked as <code>favourite</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.download_count",
            "description": "<p>Number of times the image is downloaded. *</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterId",
            "description": "<p>The parameter <code>id</code> (wallpaper_id) is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotFound",
            "description": "<p>Image whose vote to be updated is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateError",
            "description": "<p>Error caused by fault of server or network. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     HTTP/1.1 400 Bad Request\n*     {\n*        \"error_type\": \"HTTP/1.1 400 Bad Request\",\n*        \"error\": \"MissingParameter 'id'\"\n*     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/web_api.py",
    "groupTitle": "Wallpaper"
  }
] });
