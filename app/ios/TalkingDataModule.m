//
//  TalkingDataModule.m
//  Tomato
//
//  Created by Eddie Zhou on 7/9/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "TalkingDataModule.h"
#import "TalkingData.h"

@implementation TalkingDataModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(onEvent:(NSString *)eventID){
  [TalkingData trackEvent:eventID];
}

RCT_EXPORT_METHOD(onEventWithLabel:(NSString *)eventID EvnetLabel:(NSString *)EvnetLabel){
  [TalkingData trackEvent:eventID label:EvnetLabel];
}

RCT_EXPORT_METHOD(onRegister:(NSString *)accountID type:(NSUInteger)type accountName:(NSString *)accountName){
  [TalkingData onRegister:accountID type:type name:accountName];
}

@end
