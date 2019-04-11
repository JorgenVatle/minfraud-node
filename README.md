# minFraud Node Client
A Promise & TypeScript-ified Node client for [minFraud](https://www.maxmind.com/en/solutions/minfraud-services) fraud 
mitigation API.

Enables super handy auto-completion for minFraud input and response data in IDEs like VSCode and WebStorm. We're also
using [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) allowing
you take advantage of the the brand spanking new
[`async`/`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
syntax.

[![Downloads](https://img.shields.io/npm/dt/minfraud-node.svg)](https://www.npmjs.com/package/minfraud-node)
[![Version](https://img.shields.io/npm/v/minfraud-node.svg)](https://www.npmjs.com/package/minfraud-node)
[![Node Version](https://img.shields.io/node/v/minfraud-node.svg)](https://www.npmjs.com/package/minfraud-node)
[![CircleCI](https://circleci.com/gh/JorgenVatle/minfraud-node.svg?style=svg)](https://circleci.com/gh/JorgenVatle/minfraud-node)

## Installation
Takes a second to install using npm.
```bash
npm install minfraud-node 
```

## Usage

### Import and initialize the client.
```js
import MinFraud from 'minfraud-node';

const client = new MinFraud({
    accountId: '123456',    // Your MaxMind Account ID
    license: 'yItotWnzWooT' // Your MaxMind License Key
}) 
```

### Get Score
```js
const score = await client.score({
    device: {
        ip_address: '127.0.0.1'
    }
});
```
<details>
    <summary>Score response</summary>
    
```json
{
    "id": "5bc5d6c2-b2c8-40af-87f4-6d61af86b6ae",
    "risk_score": 0.01,
    "funds_remaining": 25.00,
    "queries_remaining": 5000,
 
    "ip_address": {
        "risk": 0.01
    },
 
    "disposition": {
         "action": "accept",
         "reason": "default"
    },
 
    "warnings": [
        {
            "code": "INPUT_INVALID",
            "warning": "Encountered value at /shipping/city that does not meet the required constraints",
            "input_pointer": "/shipping/city"
        }
    ]
}
```
</details>

### Get Insight
```js
const insight = await client.insight({
    device: {
        ip_address: '127.0.0.1'
    }
});
```
<details>
    <summary>Insight response</summary>
    
```json
{
    "id": "5bc5d6c2-b2c8-40af-87f4-6d61af86b6ae",
    "risk_score": 0.01,
    "funds_remaining": 25.00,
    "queries_remaining": 1666,
 
    "ip_address": {
        "risk": 0.01,
        "city":  {
            "confidence":  25,
            "geoname_id": 54321,
            "names":  {
                "de":    "Los Angeles",
                "en":    "Los Angeles",
                "es":    "Los Ángeles",
                "fr":    "Los Angeles",
                "ja":    "ロサンゼルス市",
                "pt-BR":  "Los Angeles",
                "ru":    "Лос-Анджелес",
                "zh-CN": "洛杉矶"
            }
        },
        "continent":  {
            "code":       "NA",
            "geoname_id": 123456,
            "names":  {
                "de":    "Nordamerika",
                "en":    "North America",
                "es":    "América del Norte",
                "fr":    "Amérique du Nord",
                "ja":    "北アメリカ",
                "pt-BR": "América do Norte",
                "ru":    "Северная Америка",
                "zh-CN": "北美洲"
 
            }
        },
        "country":  {
            "confidence":  75,
            "geoname_id":  6252001,
            "is_high_risk": true,
            "is_in_european_union": true,
            "iso_code":    "US",
            "names":  {
                "de":     "USA",
                "en":     "United States",
                "es":     "Estados Unidos",
                "fr":     "États-Unis",
                "ja":     "アメリカ合衆国",
                "pt-BR":  "Estados Unidos",
                "ru":     "США",
                "zh-CN":  "美国"
            }
        },
        "location":  {
            "accuracy_radius":   20,
            "average_income":    50321,
            "latitude":          37.6293,
            "local_time":        "2015-04-26T01:37:17-08:00",
            "longitude":         -122.1163,
            "metro_code":        807,
            "population_density":  7122,
            "time_zone":         "America/Los_Angeles"
        },
        "postal": {
            "code":       "90001",
            "confidence": 10
        },
        "registered_country":  {
            "geoname_id":  6252001,
            "is_in_european_union": true,
            "iso_code":    "US",
            "names":  {
                "de":     "USA",
                "en":     "United States",
                "es":     "Estados Unidos",
                "fr":     "États-Unis",
                "ja":     "アメリカ合衆国",
                "pt-BR":  "Estados Unidos",
                "ru":     "США",
                "zh-CN":  "美国"
            }
        },
        "represented_country":  {
            "geoname_id":  6252001,
            "is_in_european_union": true,
            "iso_code":    "US",
            "names":  {
                "de":     "USA",
                "en":     "United States",
                "es":     "Estados Unidos",
                "fr":     "États-Unis",
                "ja":     "アメリカ合衆国",
                "pt-BR":  "Estados Unidos",
                "ru":     "США",
                "zh-CN":  "美国"
            },
            "type": "military"
        },
        "subdivisions":  [
            {
                "confidence":  50,
                "geoname_id":  5332921,
                "iso_code":    "CA",
                "names":  {
                    "de":    "Kalifornien",
                    "en":    "California",
                    "es":    "California",
                    "fr":    "Californie",
                    "ja":    "カリフォルニア",
                    "ru":    "Калифорния",
                    "zh-CN": "加州"
                }
            }
        ],
        "traits": {
            "autonomous_system_number":      1239,
            "autonomous_system_organization": "Linkem IR WiMax Network",
            "domain":                        "example.com",
            "ip_address":                    "1.2.3.4",
            "is_anonymous":                  true,
            "is_anonymous_proxy":            true,
            "is_anonymous_vpn":              true,
            "is_hosting_provider":           true,
            "is_public_proxy":               true,
            "is_satellite_provider":         true,
            "is_tor_exit_node":              true,
            "isp":                           "Linkem spa",
            "organization":                  "Linkem IR WiMax Network",
            "user_type":                     "traveler"
        }
    },
 
    "credit_card": {
        "issuer": {
            "name": "Bank of America",
            "matches_provided_name": true,
            "phone_number": "800-732-9194",
            "matches_provided_phone_number": true
        },
        "brand": "Visa",
        "country": "US",
        "is_issued_in_billing_address_country": true,
        "is_prepaid": true,
        "is_virtual": true,
        "type": "credit"
    },
 
    "device": {
        "confidence": 99,
        "id": "7835b099-d385-4e5b-969e-7df26181d73b",
        "last_seen": "2016-06-08T14:16:38Z",
        "local_time": "2018-01-02T10:40:11-08:00"
    },
 
    "email": {
        "first_seen": "2016-02-03",
        "is_free": false,
        "is_high_risk": true
    },
 
    "shipping_address": {
        "is_high_risk": true,
        "is_postal_in_city": true,
        "latitude": 37.632,
        "longitude": -122.313,
        "distance_to_ip_location": 15,
        "distance_to_billing_address": 22,
        "is_in_ip_country": true
    },
 
    "billing_address": {
        "is_postal_in_city": true,
        "latitude": 37.545,
        "longitude": -122.421,
        "distance_to_ip_location": 100,
        "is_in_ip_country": true
    },
 
    "disposition": {
         "action": "accept",
         "reason": "default"
    },
 
    "warnings": [
        {
            "code": "INPUT_INVALID",
            "warning": "Encountered value at /shipping/city that does not meet the required constraints",
            "input_pointer": "/shipping/city"
        }
    ]
}
```
</details>

### Get Factors
```js
const factor = await client.factor({
    device: {
        ip_address: '127.0.0.1'
    }
});
```
<details>
    <summary>Factors response</summary>
    
```json
{
    "id": "5bc5d6c2-b2c8-40af-87f4-6d61af86b6ae",
    "risk_score": 0.01,
    "funds_remaining": 25.00,
    "queries_remaining": 1666,
 
    "ip_address": {
        "risk": 0.01,
        "city":  {
            "confidence":  25,
            "geoname_id": 54321,
            "names":  {
                "de":    "Los Angeles",
                "en":    "Los Angeles",
                "es":    "Los Ángeles",
                "fr":    "Los Angeles",
                "ja":    "ロサンゼルス市",
                "pt-BR":  "Los Angeles",
                "ru":    "Лос-Анджелес",
                "zh-CN": "洛杉矶"
            }
        },
        "continent":  {
            "code":       "NA",
            "geoname_id": 123456,
            "names":  {
                "de":    "Nordamerika",
                "en":    "North America",
                "es":    "América del Norte",
                "fr":    "Amérique du Nord",
                "ja":    "北アメリカ",
                "pt-BR": "América do Norte",
                "ru":    "Северная Америка",
                "zh-CN": "北美洲"
 
            }
        },
        "country":  {
            "confidence":  75,
            "geoname_id":  6252001,
            "is_high_risk": true,
            "is_in_european_union": true,
            "iso_code":    "US",
            "names":  {
                "de":     "USA",
                "en":     "United States",
                "es":     "Estados Unidos",
                "fr":     "États-Unis",
                "ja":     "アメリカ合衆国",
                "pt-BR":  "Estados Unidos",
                "ru":     "США",
                "zh-CN":  "美国"
            }
        },
        "location":  {
            "accuracy_radius":   20,
            "average_income":    50321,
            "latitude":          37.6293,
            "local_time":        "2015-04-26T01:37:17-08:00",
            "longitude":         -122.1163,
            "metro_code":        807,
            "population_density":  7122,
            "time_zone":         "America/Los_Angeles"
        },
        "postal": {
            "code":       "90001",
            "confidence": 10
        },
        "registered_country":  {
            "geoname_id":  6252001,
            "is_in_european_union": true,
            "iso_code":    "US",
            "names":  {
                "de":     "USA",
                "en":     "United States",
                "es":     "Estados Unidos",
                "fr":     "États-Unis",
                "ja":     "アメリカ合衆国",
                "pt-BR":  "Estados Unidos",
                "ru":     "США",
                "zh-CN":  "美国"
            }
        },
        "represented_country":  {
            "geoname_id":  6252001,
            "is_in_european_union": true,
            "iso_code":    "US",
            "names":  {
                "de":     "USA",
                "en":     "United States",
                "es":     "Estados Unidos",
                "fr":     "États-Unis",
                "ja":     "アメリカ合衆国",
                "pt-BR":  "Estados Unidos",
                "ru":     "США",
                "zh-CN":  "美国"
            },
            "type": "military"
        },
        "subdivisions":  [
            {
                "confidence":  50,
                "geoname_id":  5332921,
                "iso_code":    "CA",
                "names":  {
                    "de":    "Kalifornien",
                    "en":    "California",
                    "es":    "California",
                    "fr":    "Californie",
                    "ja":    "カリフォルニア",
                    "ru":    "Калифорния",
                    "zh-CN": "加州"
                }
            }
        ],
        "traits": {
            "autonomous_system_number":      1239,
            "autonomous_system_organization": "Linkem IR WiMax Network",
            "domain":                        "example.com",
            "ip_address":                    "1.2.3.4",
            "is_anonymous":                  true,
            "is_anonymous_proxy":            true,
            "is_anonymous_vpn":              true,
            "is_hosting_provider":           true,
            "is_public_proxy":               true,
            "is_satellite_provider":         true,
            "is_tor_exit_node":              true,
            "isp":                           "Linkem spa",
            "organization":                  "Linkem IR WiMax Network",
            "user_type":                     "traveler"
        }
    },
 
    "credit_card": {
        "issuer": {
            "name": "Bank of America",
            "matches_provided_name": true,
            "phone_number": "800-732-9194",
            "matches_provided_phone_number": true
        },
        "brand": "Visa",
        "country": "US",
        "is_issued_in_billing_address_country": true,
        "is_prepaid": true,
        "is_virtual": true,
        "type": "credit"
    },
 
    "device": {
        "confidence": 99,
        "id": "7835b099-d385-4e5b-969e-7df26181d73b",
        "last_seen": "2016-06-08T14:16:38Z",
        "local_time": "2018-01-02T10:40:11-08:00"
    },
 
    "email": {
        "first_seen": "2016-02-03",
        "is_free": false,
        "is_high_risk": true
    },
 
    "shipping_address": {
        "is_high_risk": true,
        "is_postal_in_city": true,
        "latitude": 37.632,
        "longitude": -122.313,
        "distance_to_ip_location": 15,
        "distance_to_billing_address": 22,
        "is_in_ip_country": true
    },
 
    "billing_address": {
        "is_postal_in_city": true,
        "latitude": 37.545,
        "longitude": -122.421,
        "distance_to_ip_location": 100,
        "is_in_ip_country": true
    },
 
    "disposition": {
         "action": "accept",
         "reason": "default"
    },
 
    "subscores": {
        "avs_result": 0.01,
        "billing_address": 0.02,
        "billing_address_distance_to_ip_location": 0.03,
        "browser": 0.04,
        "chargeback": 0.05,
        "country": 0.06,
        "country_mismatch": 0.07,
        "cvv_result": 0.08,
        "email_address": 0.09,
        "email_domain": 0.10,
        "email_tenure": 0.11,
        "ip_tenure": 0.12,
        "issuer_id_number": 0.13,
        "order_amount": 0.14,
        "phone_number": 0.15,
        "shipping_address_distance_to_ip_location": 0.16,
        "time_of_day": 0.17
    },
 
    "warnings": [
        {
            "code": "INPUT_INVALID",
            "warning": "Encountered value at /shipping/city that does not meet the required constraints",
            "input_pointer": "/shipping/city"
        }
    ]
}
```
</details>

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.
