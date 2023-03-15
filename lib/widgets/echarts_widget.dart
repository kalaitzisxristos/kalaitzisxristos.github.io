import 'package:flutter/material.dart';
import 'package:flutter_complete_guide/models/telemetry.dart';
import 'package:flutter_complete_guide/supabase/data_functions.dart';
import 'package:flutter_complete_guide/widgets/graph.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:syncfusion_flutter_charts/charts.dart';
import 'package:syncfusion_flutter_sliders/sliders.dart';
import 'package:syncfusion_flutter_core/core.dart';
import 'package:intl/intl.dart';

final supabase = Supabase.instance.client;

/*class EchartsWidget extends StatefulWidget {
  final List<dynamic> finalList;

  const EchartsWidget({super.key, required this.finalList});

  @override
  State<EchartsWidget> createState() => _EchartsWidgetState();
}

class _EchartsWidgetState extends State<EchartsWidget> {
  final _stream = supabase
      .from('telemetry_system_data')
      .stream(primaryKey: ['id']).order('racing_time', ascending: true);

  @override
  Widget build(BuildContext context) {
    //print(widget.finalList);

    return StreamBuilder(
      stream: _stream,
      builder: (context, AsyncSnapshot<List<Map<String, dynamic>>> snapshot) {
        if (!snapshot.hasData) {
          return Center(
            child: CircularProgressIndicator(),
          );
        } else {
          final List<Map<String, dynamic>> lineMarkerData = [];

          snapshot.data?.forEach((data) {
            widget.finalList.forEach((item) {
              print(widget.finalList);
              //print(item);
              lineMarkerData.add(
                {
                  'racing_time': data['racing_time'],
                  'value': data[item],
                  'group': item
                },
              );
              //print('The data is : ${lineMarkerData}');
              //print(data[item]);
            });

            //   // {'racing_time': '1.05', 'value': 10, 'group': 'rpm'}
            //   // {'racing_time': '1.05', 'value': 1, 'group': 'oil_pressure'}
          });
          //print('The data is : ${lineMarkerData}');
          print(lineMarkerData);
          //widget.function(widget.finalList);

          return echartWidget(context, lineMarkerData);
        }
      },
    );
  }
}
*/
/*
class EchartsWidget extends StatelessWidget {
  EchartsWidget({super.key, required this.finalList});
  final List<dynamic> finalList;
  late final start = finalList[0];
  late final end = finalList[1];

  final stream = supabase
      .from('telemetry_system_data2')
      .stream(primaryKey: ['id']).order('timest', ascending: true);

  final _stream = supabase
      .from('telemetry_system_data')
      .stream(primaryKey: ['id']).order('racing_time', ascending: true);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
      stream: stream,
      builder: (context, AsyncSnapshot<List<Map<String, dynamic>>> snapshot) {
        if (!snapshot.hasData) {
          return Center(
            child: CircularProgressIndicator(),
          );
        } else {
          final List<Map<String, dynamic>> lineMarkerData = [];
          //print(snapshot.data);
          //snapshot.data?.forEach((data) {
          //  finalList.skip(2).forEach((item) {
          //  if (start.compareTo(data['racing_time']) < 0 &&
          //        data['racing_time'].compareTo(end) < 0) {
          //      lineMarkerData.add(
          //        {
          //          'racing_time': data['racing_time'],
          //          'value': data[item],
          //          'group': item,
          //        },
          //      );
          //    }
          //  });
          //});
          //print(snapshot.data);
          if (start.compareTo(end) >= 0) {
            return Container(
                child:
                    Text('Initial time cannot be after or equal to end time!'));
          } else {
            snapshot.data?.forEach((data) {
              finalList.skip(2).forEach((item) {
                if (start.compareTo(data['timestamp2']) <= 0 &&
                    data['timestamp2'].compareTo(end) <= 0) {
                  if (data.containsValue(item))
                    lineMarkerData.add(
                      {
                        'racing_time': data['timestamp2'],
                        'value': data['value'],
                        'group': data['canbusId'],
                      },
                    );
                }
              });
            });
            if (lineMarkerData.length < 2) {
              return Container(
                  child: Text('Cannot plot graph with less than two points!'));
            }
            lineMarkerData.sort(
              (a, b) {
                return a['racing_time'].compareTo(b['racing_time']);
              },
            );
            //print(jsonDecode(snapshot.data![0]['timestamp2']));
            return SingleChildScrollView(
              child: Center(
                child: Column(
                  children: <Widget>[
                    Container(
                      margin: const EdgeInsets.only(top: 10),
                      width: MediaQuery.of(context).size.width * 0.6,
                      height: MediaQuery.of(context).size.height * 0.6,
                      child: Chart(
                        data: lineMarkerData,
                        variables: {
                          'racing_time': Variable(
                            accessor: (Map datum) =>
                                datum['racing_time'] as String,
                            scale: OrdinalScale(inflate: true),
                          ),
                          'value': Variable(
                            accessor: (Map datum) => datum['value'] as num,
                            scale: LinearScale(
                              tickCount: 10,
                              formatter: (v) => '${v.toInt()}',
                            ),
                          ),
                          'group': Variable(
                            accessor: (Map datum) => datum['group'] as String,
                          ),
                        },
                        elements: [
                          LineElement(
                            position: Varset('racing_time') *
                                Varset('value') /
                                Varset('group'),
                            color: ColorAttr(
                              variable: 'group',
                              values: [
                                Color.fromARGB(255, 253, 8, 0),
                                Color.fromARGB(255, 230, 255, 1),
                                Color.fromARGB(255, 26, 248, 5),
                                Color.fromARGB(255, 0, 204, 255),
                                Color.fromARGB(255, 68, 0, 255),
                                Color.fromARGB(255, 255, 0, 221),
                              ],
                            ),
                          ),
                        ],
                        axes: [
                          Defaults.horizontalAxis,
                          Defaults.verticalAxis,
                        ],
                        selections: {
                          'tooltipMouse': PointSelection(on: {
                            GestureType.hover,
                          }, devices: {
                            PointerDeviceKind.mouse
                          }, variable: 'racing_time', dim: Dim.x),
                          'tooltipTouch': PointSelection(on: {
                            GestureType.scaleUpdate,
                            GestureType.tapDown,
                            GestureType.longPressMoveUpdate
                          }, devices: {
                            PointerDeviceKind.touch
                          }, variable: 'racing_time', dim: Dim.x),
                        },
                        tooltip: TooltipGuide(
                          followPointer: [true, true],
                          align: Alignment.topLeft,
                          variables: ['group', 'value'],
                        ),
                        crosshair: CrosshairGuide(
                          followPointer: [false, true],
                        ),
                        annotations: [
                          LineAnnotation(
                            dim: Dim.y,
                            value: 11.14,
                            style: StrokeStyle(
                              color: const Color(0xff5470c6).withAlpha(100),
                              dash: [2],
                            ),
                          ),
                          LineAnnotation(
                            dim: Dim.y,
                            value: 1.57,
                            style: StrokeStyle(
                              color: const Color(0xff91cc75).withAlpha(100),
                              dash: [2],
                            ),
                          ),
                          // MarkAnnotation(
                          //   relativePath:
                          //       Paths.circle(center: Offset.zero, radius: 5),
                          //   style: Paint()..color = const Color(0xff5470c6),
                          //   values: ['Wed', 13],
                          // ),
                          // TagAnnotation(
                          //   label: Label(
                          //       '13',
                          //       LabelStyle(
                          //         style: Defaults.textStyle,
                          //         offset: const Offset(0, -10),
                          //       )),
                          //   values: ['Wed', 13],
                          // ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          }
        }
      },
    );
  }
}
*/
class EchartsWidget extends StatefulWidget {
  EchartsWidget(
      {super.key,
      required this.finalList,
      this.showDetails = true,
      this.isMessage = false});
  final List<dynamic> finalList;
  final bool showDetails;
  final bool isMessage;
  @override
  State<EchartsWidget> createState() => _EchartsWidgetState();
}

class _EchartsWidgetState extends State<EchartsWidget> {
  final stream = supabase
      .from('can_data')
      .stream(primaryKey: ['id']).order('timestamp', ascending: true);

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
        future: getData(),
        builder: (context, AsyncSnapshot snapshot) {
          if (!snapshot.hasData) {
            return Center(
              child: CircularProgressIndicator(),
            );
          } else {
            List<Data> l = [];
            final List<Map<String, dynamic>> dataXAxis = [];
            final List<Map<String, dynamic>> dataYAxis = [];

            l = snapshot.data;
            if (dataXAxis.isEmpty) {
              dataYAxis.sort((a, b) => a['time'].compareTo(b['time']));
            } else {
              //dataYAxis.sort((a, b) => a['time'].compareTo(b['time']));
              //dataYAxis.forEach((element) {
              //  for (int i = 0; i < dataXAxis.length; i++) {
              //    if (dataXAxis[i]['time'] == element['time'])
              //      element['time'] = dataXAxis[i]['value'];
              //  }
              //});

            }

            //if (widget.finalList[2] == '') {
            //  print('h');
            //  lineMarkerData.add(
            //    {
            //      'xAxis': data['timestamp2'],
            //      'yAxis': data['value'],
            //      'group': data['canbusId'],
            //    },
            //  );
            //} else {
            //  print('object');
            //  lineMarkerData.add({
            //    'xAxis': snapshot.data!
            //        .where((element) =>
            //            element['canbusId'] == widget.finalList[2])
            //        .toList()[i]['value'],
            //    'yAxis': data['value'],
            //    'group': data['canbusId'],
            //  });
            //  print(data['canbusId'].toString() +
            //      ' ' +
            //      i.toString() +
            //      '/' +
            //      snapshot.data!
            //          .where((element) =>
            //              element['canbusId'] == widget.finalList[2])
            //          .toList()
            //          .length
            //          .toString());
            //  if (i ==
            //      snapshot.data!
            //              .where((element) =>
            //                  element['canbusId'] ==
            //                  widget.finalList[2])
            //              .toList()
            //              .length -
            //          1)
            //    i = 0;
            //  else
            //    i++;
            //}

            return Graph(
              dataList: l,
              showDetails: widget.showDetails,
              isMessage: widget.isMessage,
            );
          }
        });
  }
}
