
# Provide answers for the following questions with your submission

1. If you had chosen to spend more time on this test, what would you have done differently?
    
    문제 마지막 우편번호의 지점으로부터 입력받은 반경 안의 모든 상점을 반환하는 api의 코드를 다듬고 최적화 하는데에 시간을 할애 할 것 같다.
    
2. What part did you find the hardest? What part are you most proud of? In both cases, why?
    
    기준이 되는 우편번호로부터 특정 상점의 우편번호까지의 거리를 각각의 위경도를 사용하여 계산하는 것이 가장 어려웠던 동시에 가장 자랑스러운 부분이다.
    
    이경우 위경도를 cosin과 sin을 이용하여 km단위로 변환 하는데에 어려움을 겪었기에 가장 어려웠지만, 동시에 가장 시간을 많이 할애했기에 자랑스러운 부분이다.
    
3. What is one thing we could do to improve this test?
    
    문제4의 반경의 단위라던가(본인같은 경우에는 km를 사용했다.) 각 api들의 입출력을 조금은 알려줬으면 하는 바램이 있다. api를 만들면서 애매하다고 생각한 부분들이 많아 고민을 많이 했다.
    

# 문제 1

- can get the list of stores in `stores.json`
- `stores.json` 의 상점 목록 얻기

**answer : get - [http://localhost:3000/map/getlist](http://localhost:3000/map/) 로 모든 상점목록을 가져올 수 있다**

# 문제 2

- can get the specific item of stores in `stores.json`
    - Your API consumer can identify the item with its name
- `stores.json`의 특정 품목을 얻을 수 있습니다
    - API 소비자는 이름으로 항목을 식별할 수 있습니다.

**answer : get - [http://localhost:3000/map/getstore/:name](http://localhost:3000/map/) 로 name에 가게이름을 적어**

**상점정보를 가져올 수 있다**

# 문제 3

- can get the latitude and longitude for each postcode.
    - You can use postcodes.io to get the latitude and longitudefor each postcode.
- 각 우편 번호에 대한 위도와 경도를 얻을 수 있습니다.
    - postcodes.io를 사용하여 각 우편번호의 위도와 경도를 얻을 수 있습니다.

**answer : get - [http://localhost:3000/map/getposition/:postcode](http://localhost:3000/map/) 로 우편번호의 위경도를 가져올 수 있다**

# 문제 4

- can get the functionality that allows you to return a list of stores in a given radius of a given postcode in the UK. The list must be ordered from north to south.
- 영국에서 주어진 우편번호의 주어진 반경에 있는 상점 목록을 반환할 수 있는 기능을 얻을 수 있습니다. 목록은 북쪽에서 남쪽으로 정렬되어야 합니다.

**answer : post - [http://localhost:3000/map/getstoreradius](http://localhost:3000/map/) 로 postcode, radius(반경)의 값을 넘겨 넘긴 우편번호로부터 특정 반경안의 모든 상점을 북쪽에 가까운순으로 목록을 얻을 수 있다.**
